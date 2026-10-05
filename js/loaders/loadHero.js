import { loadComponent } from "./loadComponent.js";

const heroUrl = new URL("../../components/hero.html", import.meta.url);
const siteRoot = new URL("../../", import.meta.url);

await loadComponent("hero", heroUrl);

document.querySelectorAll("#hero nav a[href]").forEach((a) => {
  const relativeHref = a.getAttribute("href");
  a.href = new URL(relativeHref, siteRoot).href;
});
