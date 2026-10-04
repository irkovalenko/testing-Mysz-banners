import { createBannerCard } from "./bannerCard.js";

export function createBannerGallery(list) {
  return `<ul class="gallery">${list.map(createBannerCard).join("")}</ul>`;
}
