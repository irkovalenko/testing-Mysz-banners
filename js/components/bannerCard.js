const pagesUrl = new URL("../../pages/", import.meta.url);

export function createBannerCard(banner) {
  const href = new URL(banner.file, pagesUrl).href;

  return `
    <li class="card">
      <a class="card-link" href="${href}" target="_blank" rel="noopener" aria-label="${banner.title}">
        <div class="preview-box">
          <iframe
            class="preview-frame"
            src="${href}"
            width="320"
            height="480"
            loading="lazy"
            scrolling="no"
            title="${banner.title}"
          ></iframe>
        </div>
      </a>
    </li>
  `;
}
