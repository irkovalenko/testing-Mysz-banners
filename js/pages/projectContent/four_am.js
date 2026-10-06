import { four_am } from "../../data/four_am.js";

const resourcesUrl = new URL(
  "../../../resources/projects/4am/",
  import.meta.url,
);

export function renderFourAm(container) {
  const [item] = four_am;
  const src = new URL(item.file, resourcesUrl).href;

  container.innerHTML = `
    <figure class="video-feature">
      <video src="${src}" title="${item.title}" controls autoplay muted loop playsinline preload="auto"></video>
    </figure>
  `;
}
