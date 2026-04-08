import express from "express";
import { createServer as createHttpServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { ViteDevServer } from "vite";
import helmet from "helmet";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT) || 3000;
const base = process.env.BASE_PATH ?? "/";

const app = express();
const httpServer = createHttpServer(app);

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
    reportOnly: true,
  },
}));

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
    express.static(path.resolve(__dirname, "dist/public"), {
      index: false,
      maxAge: "1y",
      immutable: true,
    }),
  );
}

app.use(express.json());

app.post(`${base}api/waitlist`.replace(/\/+/g, "/"), async (req, res) => {
  try {
    const { countryCode, phoneNumber } = req.body as { countryCode?: string; phoneNumber?: string };
    if (!countryCode || !phoneNumber || phoneNumber.replace(/\D/g, "").length < 6) {
      res.status(400).json({ error: "Invalid phone number" });
      return;
    }
    const fullNumber = `${countryCode}${phoneNumber.replace(/\s/g, "")}`;
    await pool.query(
      "INSERT INTO waitlist_phones (country_code, phone_number, full_number) VALUES ($1, $2, $3) ON CONFLICT (full_number) DO NOTHING",
      [countryCode, phoneNumber.trim(), fullNumber],
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    res.status(500).json({ error: "Server error, please try again" });
  }
});

app.use(async (req, res) => {
  try {
    const url = req.originalUrl;
    let template: string;
    let render: (url: string) => Promise<{ appHtml: string; headTags: string }>;

    if (!isProd) {
      template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8",
      );
      template = await vite!.transformIndexHtml(url, template);
      const mod = await vite!.ssrLoadModule("/src/entry-server.tsx");
      render = mod.render;
    } else {
      template = fs.readFileSync(
        path.resolve(__dirname, "dist/public/index.html"),
        "utf-8",
      );
      const serverEntry = path.resolve(
        __dirname,
        "dist/server/entry-server.js",
      );
      render = (await import(serverEntry)).render;
    }

    const { appHtml, headTags } = await render(url);
    const fullHtml = template
      .replace("<!--head-tags-->", headTags)
      .replace("<!--app-html-->", appHtml);

    res.status(200).set({ "Content-Type": "text/html" }).end(fullHtml);
  } catch (e: unknown) {
    const err = e as Error;
    vite?.ssrFixStacktrace(err);
    console.error(err.stack);
    res.status(500).end(err.message);
  }
});

httpServer.listen(port, "0.0.0.0", () => {
  console.log(`SSR server listening on http://0.0.0.0:${port}`);
});
