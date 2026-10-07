import { mouse_shrine } from "../../data/mouse_shrine.js";
import "../../components/videoModal.js";

const resourcesUrl = new URL(
  "../../../resources/projects/contests/",
  import.meta.url,
);

export function renderContest(container) {
  const [item] = mouse_shrine;

  const description = Array.isArray(item.description)
    ? item.description.map((p) => `<p>${p}</p>`).join("")
    : item.description;

  const stills = (item.images ?? [])
    .map((still) => {
      const src = new URL(still.file, resourcesUrl).href;
      const label = still.title ?? "";
      return `
        <li>
          <a href="${src}" data-image="${src}" data-title="${label}">
            <img src="${src}" alt="${label}" loading="lazy">
          </a>
        </li>`;
    })
    .join("");

  container.innerHTML = `
    <figure class="video-feature video-feature--youtube">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0"
        title="${item.title}"
        allow="encrypted-media; picture-in-picture; fullscreen"
        allowfullscreen
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </figure>

    <section class="work-info">
      <div class="work-description">${description}</div>
      ${stills ? `<ul class="still-gallery">${stills}</ul>` : ""}
    </section>
  `;
}
