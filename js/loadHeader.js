import { loadComponent } from "./loadComponent.js";

const headerUrl = new URL("../components/header.html", import.meta.url);
const siteRoot = new URL("../", import.meta.url);

await loadComponent("header", headerUrl);

const normalize = (path) =>
  path.replace(/\/index\.html$/, "").replace(/\/$/, "");

const currentPath = normalize(location.pathname);

document.querySelectorAll("#header nav a[href]").forEach((a) => {
  const href = a.getAttribute("href");

  // Don't treat #about as a page
  if (href.startsWith("#")) return;

  const url = new URL(href, siteRoot);
  a.href = url.href;

  const isActive = normalize(url.pathname) === currentPath;

  a.classList.toggle("active", isActive);

  if (isActive) {
    a.setAttribute("aria-current", "page");
  } else {
    a.removeAttribute("aria-current");
  }
});
