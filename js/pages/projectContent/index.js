export const projectContent = {
  "hybrid-adtech": () => import("./banners.js").then((m) => m.renderBanners),
  hobby: () => import("./hobbies.js").then((m) => m.renderHobbies),
  web: () => import("./perelyn.js").then((m) => m.renderPerelyn),
  "4am": () => import("./four_am.js").then((m) => m.renderFourAm),
  contests: () => import("./mouse_shrine.js").then((m) => m.renderContest),
};
