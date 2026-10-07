export function createMediaStage({
  ratio = "landscape",
  label,
  video,
  image,
  title = label,
  wide = false,
}) {
  const classes = ["card", "media-stage", `media-stage--${ratio}`];
  if (wide) classes.push("media-stage--wide");

  let inner;

  if (video) {
    inner = `
      <a class="media-stage-link" href="${video}" data-video="${video}" data-title="${title}" aria-label="Play ${title}">
        <video src="${video}" autoplay loop muted playsinline preload="auto"></video>
      </a>`;
  } else if (image) {
    inner = `
      <a class="media-stage-link" href="${image}" data-image="${image}" data-title="${title}" aria-label="${title}">
        <img src="${image}" alt="${title}" loading="lazy">
      </a>`;
  } else {
    inner = `
      <div class="raster-dots media-stage-placeholder">
        <p class="media-stage-label">${label}</p>
      </div>`;
  }

  return `<div class="${classes.join(" ")}" data-media-stage>${inner}</div>`;
}
