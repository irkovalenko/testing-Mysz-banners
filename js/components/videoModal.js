import { openMedia } from "./modal.js";

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-video]");
  if (!trigger) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;

  e.preventDefault();
  openMedia({
    type: "video",
    src: trigger.dataset.video,
    title: trigger.dataset.title ?? "",
  });
});
