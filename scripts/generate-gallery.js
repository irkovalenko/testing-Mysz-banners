// Run with: node scripts/generate-gallery.js

const fs = require("fs");
const path = require("path");

const PAGES_DIR = path.join(__dirname, "..", "pages");
const OUTPUT_FILE = path.join(
  __dirname,
  "..",
  "components",
  "banner_gallery.html", // must match galleryUrl in js/loadBannersGallery.js
);

// href as seen from the page that shows the gallery (pages/projects/…)
const HREF_PREFIX = "../../pages/";

const BANNER_WIDTH = 320;
const BANNER_HEIGHT = 480;

function getBannerFiles() {
  return fs
    .readdirSync(PAGES_DIR, { withFileTypes: true })
    .filter(
      (entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"),
    )
    .map((entry) => entry.name)
    .sort();
}

function formatLabel(fileName) {
  return fileName
    .replace(/\.html?$/i, "")
    .replace(/[_-]+/g, " ")
    .trim();
}

function buildCard(fileName) {
  const label = formatLabel(fileName);
  const href = `${HREF_PREFIX}${fileName}`;

  return `
  <li class="card">
    <a class="card-link" href="${href}" target="_blank" rel="noopener" aria-label="${label}">
      <div class="preview-box">
        <iframe
          class="preview-frame"
          src="${href}"
          width="${BANNER_WIDTH}"
          height="${BANNER_HEIGHT}"
          loading="lazy"
          scrolling="no"
          title="${label}"
        ></iframe>
      </div>
    </a>
  </li>`;
}

function main() {
  if (!fs.existsSync(PAGES_DIR)) {
    console.error(`Could not find a "pages" folder at ${PAGES_DIR}`);
    process.exit(1);
  }

  const files = getBannerFiles();
  if (files.length === 0)
    console.warn("No .html files were found inside ./pages");

  const html = `<ul class="gallery">${files.map(buildCard).join("\n")}
</ul>
`;
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, html, "utf8");

  console.log(
    `✅ Generated ${path.basename(OUTPUT_FILE)} with ${files.length} banner(s).`,
  );
}

main();
