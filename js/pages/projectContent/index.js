export const projectContent = {
  advertisement: () =>
    import("./advertisement.js").then((m) => m.renderBanners),
  hobby: () => import("./hobbies.js").then((m) => m.renderHobbies),
  "website-layout": () => import("./webLayout.js").then((m) => m.renderPerelyn),
  animation: () => import("./animationStudio.js").then((m) => m.renderFourAm),
  contests: () => import("./contests.js").then((m) => m.renderContest),
};
