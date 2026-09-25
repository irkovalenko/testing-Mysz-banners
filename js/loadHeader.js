import { loadComponent } from "./loadComponent.js";

const headerUrl = new URL("../components/header.html", import.meta.url);
const siteRoot = new URL("../", import.meta.url);

await loadComponent("header", headerUrl);

document.querySelectorAll("#header nav a[href]").forEach((a) => {
  const relativeHref = a.getAttribute("href");
  a.href = new URL(relativeHref, siteRoot).href;
});
