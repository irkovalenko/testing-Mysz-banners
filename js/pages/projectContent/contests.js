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
      <li class="card">
        <a class="card-link" href="${src}" data-image="${src}" data-title="${label}" aria-label="${label}">
          <div class="preview-box">
            <img src="${src}" alt="${label}" loading="lazy">
          </div>
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
    ${stills ? `<ul class="gallery gallery--landscape">${stills}</ul>` : ""}
  </section>

  <div class="gallery-lightbox" aria-hidden="true">
    <button
      class="gallery-lightbox-close"
      type="button"
      aria-label="Close image"
    >
      ×
    </button>

    <button
      class="gallery-lightbox-prev"
      type="button"
      aria-label="Previous image"
    >
      ←
    </button>

    <figure class="gallery-lightbox-figure">
      <img class="gallery-lightbox-image" src="" alt="">
      <figcaption class="gallery-lightbox-title"></figcaption>
    </figure>

    <button
      class="gallery-lightbox-next"
      type="button"
      aria-label="Next image"
    >
      →
    </button>
  </div>
`;

  const galleryItems = [...container.querySelectorAll(".card-link")];

  const lightbox = container.querySelector(".gallery-lightbox");
  const lightboxImage = container.querySelector(".gallery-lightbox-image");
  const lightboxTitle = container.querySelector(".gallery-lightbox-title");
  const closeButton = container.querySelector(".gallery-lightbox-close");
  const prevButton = container.querySelector(".gallery-lightbox-prev");
  const nextButton = container.querySelector(".gallery-lightbox-next");

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + galleryItems.length) % galleryItems.length;

    const item = galleryItems[currentIndex];

    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.dataset.title || "";
    lightboxTitle.textContent = item.dataset.title || "";

    lightbox.setAttribute("aria-hidden", "false");
    lightbox.classList.add("is-open");

    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");

    lightboxImage.src = "";
  }

  function showPrevious() {
    showImage(currentIndex - 1);
  }

  function showNext() {
    showImage(currentIndex + 1);
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      showImage(index);
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  prevButton.addEventListener("click", showPrevious);
  nextButton.addEventListener("click", showNext);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  });
}
