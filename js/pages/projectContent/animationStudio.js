import { animation } from "../../data/animation_studio.js";

const resourcesUrl = new URL(
  "../../../resources/projects/animation_studio/",
  import.meta.url,
);

export function renderFourAm(container) {
  const [item] = animation;
  const src = new URL(item.file, resourcesUrl).href;

  container.innerHTML = `
    <figure class="video-feature">
      <video src="${src}" title="${item.title}" controls autoplay muted loop playsinline preload="auto"></video>
    </figure>
  `;
}
