import { banners } from "../data/banners.js";
import { createBannerGallery } from "../components/bannerGallery.js";
import { fitPreviews } from "../fitPreviews.js";
import "../components/bannerModal.js"; // sets up the modal on import

const container = document.querySelector("#banner_gallery");

if (container) {
  container.innerHTML = createBannerGallery(banners);
  fitPreviews(container);
}
