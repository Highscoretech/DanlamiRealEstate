/**
 * Builds `brief.html` — a single self-contained copy of the brief page,
 * generated from the Next.js prerender so there is only ever one source.
 *
 * Use it when you want to send the client a file or a link without
 * deploying the app.
 *
 *   npm run build
 *   npm run standalone
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const html = readFileSync(join(root, ".next/server/app/index.html"), "utf8");

const cssDir = join(root, ".next/static/css");
const css = readdirSync(cssDir)
  .filter((f) => f.endsWith(".css"))
  .map((f) => readFileSync(join(cssDir, f), "utf8"))
  .join("\n");

let body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1];
if (!body) throw new Error("No <body> found in the prerender — run `npm run build` first.");

// Strip everything a standalone file cannot use.
body = body
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<template[\s\S]*?<\/template>/gi, "")
  .replace(/<next-route-announcer[\s\S]*?<\/next-route-announcer>/gi, "")
  .replace(/<link[^>]*rel="preload"[^>]*>/gi, "")
  .trim();

// React attached the print handler in the JS we just removed; re-attach inline.
const withHandler = body.replace(
  /<button([^>]*class="btn"[^>]*)>/i,
  '<button$1 onclick="window.print()">'
);
if (withHandler === body) throw new Error("Print button not found — check PrintButton.tsx markup.");

const out = `<title>Danlami Website Brief</title>
<style>
${css}
</style>
${withHandler}
`;

writeFileSync(join(root, "brief.html"), out, "utf8");
console.log(`brief.html written — ${(out.length / 1024).toFixed(1)} KB`);
