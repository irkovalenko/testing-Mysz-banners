export const projectContent = {
  "hybrid-adtech": () => import("./banners.js").then((m) => m.renderBanners),
};
