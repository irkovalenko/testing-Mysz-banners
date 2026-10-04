import { loadComponent } from "./loadComponent.js";
import { fitPreviews } from "./fitPreviews.js";
import "./components/bannerModal.js";

const galleryUrl = new URL(
  "../components/banner_gallery.html",
  import.meta.url,
);

await loadComponent("banner_gallery", galleryUrl);

fitPreviews(document.querySelector("#banner_gallery"));
