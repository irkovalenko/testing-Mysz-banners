import { openMedia } from "./modal.js";

document.addEventListener("click", (e) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;

  const videoTrigger = e.target.closest("[data-video]");
  if (videoTrigger) {
    e.preventDefault();
    openMedia({
      type: "video",
      src: videoTrigger.dataset.video,
      title: videoTrigger.dataset.title ?? "",
    });
    return;
  }

  const imageTrigger = e.target.closest(
    "[data-image]:not(.image-modal-trigger)",
  );
  if (imageTrigger) {
    e.preventDefault();
    openMedia({
      type: "image",
      src: imageTrigger.dataset.image,
      title: imageTrigger.dataset.title ?? "",
    });
    return;
  }

  const ytTrigger = e.target.closest("[data-youtube]");
  if (ytTrigger) {
    e.preventDefault();
    const id = ytTrigger.dataset.youtube;
    openMedia({
      type: "iframe",
      src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
      title: ytTrigger.dataset.title ?? "",
      label: ytTrigger.dataset.title ?? "",
      width: 1280,
      height: 720,
      allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
    });
  }
});
