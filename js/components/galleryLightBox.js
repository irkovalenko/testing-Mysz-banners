export function createLightBoxGallery() {
  return `
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
        <img
          class="gallery-lightbox-image"
          src=""
          alt=""
        />
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
}
