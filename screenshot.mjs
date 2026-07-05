// screenshot.mjs — takes screenshots of all local projects
// Run: node screenshot.mjs

import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, existsSync } from "fs";
import { extname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const THUMB_DIR = resolve(__dirname, "public/thumbnails");
const VIEWPORT = { width: 1280, height: 800 };

// Map: output filename → absolute path to project folder (must contain index.html)
const projects = [
  { slug: "solar-system",     path: "/Users/rithvicca/solar" },
  { slug: "storysprout",      path: "/Users/rithvicca/Projects/StorySprout" },
  { slug: "techtimemachine",  path: "/Users/rithvicca/Projects/TechTimeMachine" },
  { slug: "todo-app",         path: "/Users/rithvicca/Projects/to-do" },
  { slug: "tudu",             path: "/Users/rithvicca/Projects/tudu-task-management-2" },
];

// Tiny static file server
function serveFolder(folder) {
  const MIME = {
    ".html": "text/html", ".css": "text/css", ".js": "application/javascript",
    ".mjs": "application/javascript", ".json": "application/json",
    ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
    ".ico": "image/x-icon", ".woff2": "font/woff2", ".woff": "font/woff",
  };
  return new Promise((res) => {
    const server = createServer((req, response) => {
      let filePath = join(folder, req.url === "/" ? "index.html" : req.url.split("?")[0]);
      if (!existsSync(filePath)) {
        response.writeHead(404); response.end(); return;
      }
      const ext = extname(filePath).toLowerCase();
      response.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      response.end(readFileSync(filePath));
    });
    server.listen(0, "127.0.0.1", () => res(server));
  });
}

async function screenshot(browser, url, outPath, waitMs = 1500) {
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });
  await new Promise((r) => setTimeout(r, waitMs)); // let animations settle
  await page.screenshot({ path: outPath, type: "jpeg", quality: 90 });
  await page.close();
  console.log(`  ✓ ${outPath}`);
}

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });

  for (const { slug, path: folder } of projects) {
    console.log(`\n→ ${slug} (${folder})`);
    const server = await serveFolder(folder);
    const port = server.address().port;
    const outPath = join(THUMB_DIR, `${slug}.jpg`);
    try {
      await screenshot(browser, `http://127.0.0.1:${port}/`, outPath);
    } catch (e) {
      console.error(`  ✗ failed: ${e.message}`);
    } finally {
      server.close();
    }
  }

  await browser.close();
  console.log("\nDone! Thumbnails saved to public/thumbnails/");
})();
