import { loadComponent } from "./loadComponent.js";

const footerUrl = new URL("../../components/footer.html", import.meta.url);
const siteRoot = new URL("../", import.meta.url);

await loadComponent("footer", footerUrl);

document.querySelectorAll("#footer img[src]").forEach((img) => {
  img.src = new URL(img.getAttribute("src"), siteRoot).href;
});
