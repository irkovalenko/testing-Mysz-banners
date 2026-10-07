const resourcesUrl = new URL("../../resources/projects/", import.meta.url);

function createVideoCard(item, baseUrl) {
  const src = new URL(item.file, baseUrl).href;

  return `
    <li class="card">
      <a class="card-link" href="${src}" data-video="${src}" data-title="${item.title}" aria-label="Play ${item.title}">
        <div class="preview-box">
          <video src="${src}" autoplay loop muted playsinline preload="auto"></video>
        </div>
      </a>
    </li>
  `;
}

export function createVideoGallery(list, folder = "") {
  const baseUrl = new URL(folder, resourcesUrl);
  return `<ul class="gallery gallery--mixed">${list
    .map((item) => createVideoCard(item, baseUrl))
    .join("")}</ul>`;
}
