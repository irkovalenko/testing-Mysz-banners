export function createMediaStage({
  ratio = "landscape",
  video,
  image,
  wide = false,
}) {
  const classes = ["card", "media-stage", `media-stage--${ratio}`];
  if (wide) classes.push("media-stage--wide");

  let inner;

  if (video) {
    inner = `
      <a class="media-stage-link" href="${video}" data-video="${video}">
        <video src="${video}" autoplay loop muted playsinline preload="auto"></video>
      </a>`;
  } else {
    inner = `
      <a class="media-stage-link" href="${image}" data-image="${image}">
        <img src="${image}" loading="lazy">
      </a>`;
  }

  return `<div class="${classes.join(" ")}" data-media-stage>${inner}</div>`;
}
