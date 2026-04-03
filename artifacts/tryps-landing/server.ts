import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { ViteDevServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT) || 3000;
const base = process.env.BASE_PATH ?? "/";

const app = express();

let vite: ViteDevServer | undefined;

if (!isProd) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  app.use(
    base,
    express.static(path.resolve(__dirname, "dist/public"), { index: false }),
  );
}

app.use(async (req, res) => {
  try {
    const url = req.originalUrl;
    let template: string;
    let render: (url: string) => Promise<string>;

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

    const appHtml = await render(url);
    const fullHtml = template.replace("<!--app-html-->", appHtml);

    res.status(200).set({ "Content-Type": "text/html" }).end(fullHtml);
  } catch (e: unknown) {
    const err = e as Error;
    vite?.ssrFixStacktrace(err);
    console.error(err.stack);
    res.status(500).end(err.message);
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`SSR server listening on http://0.0.0.0:${port}`);
});
