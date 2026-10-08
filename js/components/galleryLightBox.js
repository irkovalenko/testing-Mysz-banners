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

      <figure class="gallery-lightbox-figure">
        <div class="gallery-lightbox-stage">
          <button
            class="gallery-lightbox-prev"
            type="button"
            aria-label="Previous image"
          >
            ←
          </button>
          <img
            class="gallery-lightbox-image"
            src=""
            alt=""
          />
          <button
            class="gallery-lightbox-next"
            type="button"
            aria-label="Next image"
          >
            →
          </button>
        </div>
        <figcaption class="gallery-lightbox-title"></figcaption>
      </figure>

    </div>
  `;
}
