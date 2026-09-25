import { loadComponent } from "./loadComponent.js";

const galleryUrl = new URL(
  "../components/banner_gallery.html",
  import.meta.url,
);
const siteRoot = new URL("../", import.meta.url);

await loadComponent("banner_gallery", galleryUrl);

document.querySelectorAll("#banner_gallery nav a[href]").forEach((a) => {
  const relativeHref = a.getAttribute("href");
  a.href = new URL(relativeHref, siteRoot).href;
});
