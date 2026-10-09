export function createLightBoxGallery() {
  return `
    <div class="gallery-lightbox" aria-hidden="true">

      <figure class="gallery-lightbox-figure">
        <div class="gallery-lightbox-stage">
          <button
            class="gallery-lightbox-prev"
            type="button"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
          </button>

          <div class="gallery-lightbox-image-wrap">
            <img
              class="gallery-lightbox-image"
              src=""
              alt=""
            />
            <button
              class="gallery-lightbox-close"
              type="button"
              aria-label="Close image"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>

          <button
            class="gallery-lightbox-next"
            type="button"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
        <figcaption class="gallery-lightbox-title"></figcaption>
      </figure>

    </div>
  `;
}
