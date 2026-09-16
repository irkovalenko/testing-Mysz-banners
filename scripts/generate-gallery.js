// generate-gallery.js
//
// Scans ./pages for banner HTML files (e.g. Biedronka.html, Mazda.html),
// extracts each banner's pixel dimensions from its filename if present
// (e.g. "Mazda_RichMedia_320x480_final.html" -> 320x480), and writes out
// index.html with a clickable, live iframe preview of every banner.
//
// Expected structure:
//   pages/
//     Biedronka.html
//     Mazda.html
//   resources/
//     Biedronka/   (assets referenced by pages/Biedronka.html)
//     Mazda/       (assets referenced by pages/Mazda.html)
//
// Run with: node generate-gallery.js

const fs = require("fs");
const path = require("path");

const PAGES_DIR = path.join(__dirname, "..", "pages");
const OUTPUT_FILE = path.join(__dirname, "..", "index.html");

// Fallback size used when a filename doesn't contain a WxH pattern.
const DEFAULT_WIDTH = 300;
const DEFAULT_HEIGHT = 250;

// Max width/height a thumbnail preview box is allowed to take up.
// The iframe is loaded at its real size, then scaled down to fit inside this.
const THUMB_MAX_WIDTH = 260;
const THUMB_MAX_HEIGHT = 260;

function getBannerFiles() {
  return fs
    .readdirSync(PAGES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
    .map((entry) => entry.name)
    .sort();
}

function extractDimensions(fileName) {
  const match = fileName.match(/(\d{2,4})x(\d{2,4})/i);
  if (match) {
    return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
  }
  return { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT };
}

function formatLabel(fileName) {
  // "Mazda_RichMedia_320x480_final.html" -> "Mazda RichMedia 320x480 final"
  return fileName.replace(/\.html?$/i, "").replace(/[_-]+/g, " ").trim();
}

function buildCard(fileName) {
  const { width, height } = extractDimensions(fileName);
  const scale = Math.min(THUMB_MAX_WIDTH / width, THUMB_MAX_HEIGHT / height, 1);
  const boxWidth = Math.round(width * scale);
  const boxHeight = Math.round(height * scale);
  const label = formatLabel(fileName);
  const href = `pages/${fileName}`;

  return `
    <li class="card">
      <a class="card-link" href="${href}" target="_blank" rel="noopener">
        <div class="preview-box" style="width:${boxWidth}px; height:${boxHeight}px;">
          <iframe
            class="preview-frame"
            src="${href}"
            width="${width}"
            height="${height}"
            style="transform: scale(${scale.toFixed(4)});"
            loading="lazy"
            scrolling="no"
            title="${label}"
          ></iframe>
        </div>
        <div class="card-label">
          <span class="card-name">${label}</span>
          <span class="card-size">${width}×${height}</span>
        </div>
      </a>
    </li>`;
}

function buildGalleryHtml(files) {
  const cards = files.map(buildCard).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banner Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="page-header">
        <h1>Banner Gallery</h1>
        <p class="page-sub">${files.length} creative${files.length === 1 ? "" : "s"} — click any preview to open the full banner</p>
    </header>

    <ul class="gallery">${cards}
    </ul>
</body>
</html>
`;
}

function main() {
  if (!fs.existsSync(PAGES_DIR)) {
    console.error(`Could not find a "pages" folder at ${PAGES_DIR}`);
    console.error("Create it and put your banner HTML files inside, e.g.:");
    console.error("  pages/Mazda_RichMedia_320x480_final.html");
    process.exit(1);
  }

  const files = getBannerFiles();

  if (files.length === 0) {
    console.warn("No .html files were found inside ./pages");
  }

  const html = buildGalleryHtml(files);
  fs.writeFileSync(OUTPUT_FILE, html, "utf8");

  console.log(`✅ Generated index.html with ${files.length} banner(s).`);
}

main();