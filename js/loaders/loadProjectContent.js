// js/components/projectContent.js
import { banners } from "../data/banners.js";
import { createBannerGallery } from "../components/bannerGallery.js";
import { fitPreviews } from "../fitPreviews.js";
import "../components/bannerModal.js";

const imagesUrl = new URL("../../resources/images/work/", import.meta.url);

export const projectContent = {
  banners: {
    render: () => createBannerGallery(banners),
    mount: (el) => fitPreviews(el),
  },

  web: {
    render: (p) => `
      <img class="project-image" src="${new URL(p.heroImage, imagesUrl).href}"
           alt="${p.title.replace("\n", " ")}" />
      <a class="project-link" href="${p.externalUrl}" target="_blank" rel="noopener">
        Visit website ↗
      </a>
    `,
  },

  link: {
    render: (p) => `
      <a class="project-link" href="${p.externalUrl}" target="_blank" rel="noopener">
        Open project ↗
      </a>
    `,
  },

  images: {
    render: (p) =>
      `<div class="project-images">${p.images
        .map(
          (img) =>
            `<img src="${new URL(img, imagesUrl).href}" alt="" loading="lazy" />`,
        )
        .join("")}</div>`,
  },
};
