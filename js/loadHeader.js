import { loadComponent } from "./loadComponent.js";

const headerUrl = new URL("../components/header.html", import.meta.url);
const siteRoot = new URL("../", import.meta.url);

await loadComponent("header", headerUrl);

const normalize = (path) => path.replace(/index\.html$/, "");
const currentPath = normalize(location.pathname);

document.querySelectorAll("#header nav a[href]").forEach((a) => {
  const relativeHref = a.getAttribute("href");
  a.href = new URL(relativeHref, siteRoot).href;

  const isActive = normalize(a.pathname) === currentPath;
  a.classList.toggle("active", isActive);
  if (isActive) a.setAttribute("aria-current", "page");
});
