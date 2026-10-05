import { loadComponent } from "./loadComponent.js";

const marqueeUrl = new URL("../components/marquee.html", import.meta.url);
const siteRoot = new URL("../", import.meta.url);

await loadComponent("marquee", marqueeUrl);

document.querySelectorAll("#marquee nav a[href]").forEach((a) => {
  const relativeHref = a.getAttribute("href");
  a.href = new URL(relativeHref, siteRoot).href;
});
