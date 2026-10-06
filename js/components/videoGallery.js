const resourcesUrl = new URL("../../resources/projects/", import.meta.url);

function createVideoCard(item, baseUrl) {
  const src = new URL(item.file, baseUrl).href;

  return `
    <li class="video-card">
      <a href="${src}" data-video="${src}" data-title="${item.title}" aria-label="Play ${item.title}">
        <video src="${src}"autoplay loop muted playsinline preload="auto"></video>
        <span class="video-card-title">${item.title}</span>
      </a>
    </li>
  `;
}

export function createVideoGallery(list, folder = "") {
  const baseUrl = new URL(folder, resourcesUrl);
  return `<ul class="video-gallery">${list
    .map((item) => createVideoCard(item, baseUrl))
    .join("")}</ul>`;
}
