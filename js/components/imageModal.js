export function initImageModal(container) {
  const galleryItems = [...container.querySelectorAll(".image-modal-trigger")];

  const lightbox = container.querySelector(".gallery-lightbox");

  if (!galleryItems.length || !lightbox) {
    return;
  }

  // Move the lightbox outside the project/container layout.
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".gallery-lightbox-image");
  const lightboxTitle = lightbox.querySelector(".gallery-lightbox-title");
  const closeButton = lightbox.querySelector(".gallery-lightbox-close");
  const prevButton = lightbox.querySelector(".gallery-lightbox-prev");
  const nextButton = lightbox.querySelector(".gallery-lightbox-next");

  if (
    !lightboxImage ||
    !lightboxTitle ||
    !closeButton ||
    !prevButton ||
    !nextButton
  ) {
    return;
  }

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + galleryItems.length) % galleryItems.length;

    const item = galleryItems[currentIndex];

    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.dataset.title || "";
    lightboxTitle.textContent = item.dataset.title || "";

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");

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
