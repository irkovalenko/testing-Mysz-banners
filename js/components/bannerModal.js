import { openMedia } from "./modal.js";

document.addEventListener("click", (e) => {
  const trigger = e.target.closest(".card-link");
  if (!trigger) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;

  e.preventDefault();
  openMedia({
    type: "iframe",
    src: trigger.dataset.video,
    title: trigger.dataset.title ?? "",
  });
});
