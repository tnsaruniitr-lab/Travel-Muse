import express from "express";
import { createServer as createHttpServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { ViteDevServer } from "vite";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import pg from "pg";
import { parsePhoneNumber, isValidPhoneNumber } from "libphonenumber-js";

const connectionString = process.env.SUPABASE_DATABASE_URL || process.env.DATABASE_URL;
const pool = new pg.Pool({
  connectionString,
  ssl: process.env.SUPABASE_DATABASE_URL ? { rejectUnauthorized: false } : undefined,
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// process.cwd() is always /var/task in Vercel Lambda, regardless of where server.js is loaded from
const appRoot = process.env.VERCEL
  ? path.join(process.cwd(), "artifacts/tryps-landing")
  : __dirname;
const isProd = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT) || 3000;
const base = process.env.BASE_PATH ?? "/";

const ALLOWED_COUNTRY_CODES = new Set([
  "+1", "+44", "+91", "+61", "+64", "+353", "+27", "+65", "+60",
  "+49", "+33", "+34", "+39", "+31", "+46", "+47", "+45", "+358",
  "+55", "+52", "+54", "+57", "+51", "+56", "+58", "+593", "+595",
  "+81", "+82", "+86", "+852", "+853", "+886", "+66", "+62",
  "+92", "+880", "+94", "+977", "+63", "+84", "+66",
  "+971", "+966", "+20", "+234", "+254", "+233", "+212",
]);

const waitlistLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again in 15 minutes." },
});

const app = express();
const httpServer = createHttpServer(app);

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:", "https://www.googletagmanager.com"],
      connectSrc: ["'self'", "https://www.googletagmanager.com", "https://region1.google-analytics.com", "https://analytics.google.com"],
      frameSrc: ["https://www.googletagmanager.com"],
    },
    reportOnly: true,
  },
}));

app.use(compression());

// Serve app screenshot images with cross-origin headers so canvas and external embeds can load them
app.use("/images/app", (req: any, res: any, next: any) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
}, express.static(path.resolve(appRoot, "public/images/app"), { maxAge: "1d" }));

let vite: ViteDevServer | undefined;

if (!isProd) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true, hmr: { server: httpServer } },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  app.use(
    base,
    express.static(path.resolve(appRoot, "dist/public"), {
      index: false,
      maxAge: "1y",
      immutable: true,
    }),
  );
}

app.use(express.json({ limit: "10kb" }));

const waitlistPath = `${base}api/waitlist`.replace(/\/+/g, "/");

app.post(waitlistPath, waitlistLimiter, async (req: any, res: any) => {
  try {
    const { countryCode, phoneNumber } = req.body as { countryCode?: string; phoneNumber?: string };

    if (!countryCode || !phoneNumber) {
      res.status(400).json({ error: "Country code and phone number are required." });
      return;
    }

    if (!ALLOWED_COUNTRY_CODES.has(countryCode)) {
      res.status(400).json({ error: "Unsupported country code." });
      return;
    }

    const combined = `${countryCode}${phoneNumber.replace(/\s/g, "")}`;

    let isValid = false;
    try {
      isValid = isValidPhoneNumber(combined);
    } catch {
      isValid = false;
    }

    if (!isValid) {
      res.status(400).json({ error: "Please enter a valid phone number." });
      return;
    }

    let normalized = combined;
    try {
      normalized = parsePhoneNumber(combined).number;
    } catch {
      normalized = combined;
    }

    await pool.query(
      "INSERT INTO waitlist_phones (country_code, phone_number, full_number) VALUES ($1, $2, $3) ON CONFLICT (full_number) DO NOTHING",
      [countryCode, phoneNumber.trim(), normalized],
    );

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    res.status(500).json({ error: "Server error, please try again." });
  }
});

app.use(async (req: any, res: any) => {
  try {
    const url = req.originalUrl;
    let template: string;
    let render: (url: string) => Promise<{ appHtml: string; headTags: string }>;

    if (!isProd) {
      template = fs.readFileSync(
        path.resolve(appRoot, "index.html"),
        "utf-8",
      );
      template = await vite!.transformIndexHtml(url, template);
      const mod = await vite!.ssrLoadModule("/src/entry-server.tsx");
      render = mod.render;
    } else {
      template = fs.readFileSync(
        path.resolve(appRoot, "dist/public/index.html"),
        "utf-8",
      );
      const serverEntry = path.resolve(
        appRoot,
        "dist/server/entry-server.js",
      );
      render = (await import(serverEntry)).render;
    }

    const { appHtml, headTags } = await render(url);
    const fullHtml = template
      .replace("<!--head-tags-->", headTags)
      .replace("<!--app-html-->", appHtml);

    res.status(200).set({
      "Content-Type": "text/html",
      "Cache-Control": "no-cache, must-revalidate",
    }).end(fullHtml);
  } catch (e: unknown) {
    const err = e as Error;
    vite?.ssrFixStacktrace(err);
    console.error(err.stack);
    res.status(500).end(err.message);
  }
});

if (!process.env.VERCEL) {
  httpServer.listen(port, "0.0.0.0", () => {
    console.log(`SSR server listening on http://0.0.0.0:${port}`);
  });
}

export default app;
