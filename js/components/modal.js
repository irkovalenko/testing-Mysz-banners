const dialog = document.createElement("dialog");
dialog.className = "banner-modal";
dialog.innerHTML = `
  <div class="banner-modal-bar">
    <p class="banner-modal-title"></p>
    <button type="button" class="banner-modal-close" aria-label="Close">✕</button>
  </div>
  <iframe class="banner-modal-frame" hidden></iframe>
  <video class="banner-modal-video" controls playsinline hidden></video>
  <img class="banner-modal-image" alt="" hidden>

`;
document.body.append(dialog);

const title = dialog.querySelector(".banner-modal-title");
const frame = dialog.querySelector(".banner-modal-frame");
const video = dialog.querySelector(".banner-modal-video");
const image = dialog.querySelector(".banner-modal-image");

export function openMedia({
  type = "iframe",
  src,
  title: name = "",
  width,
  height,
}) {
  frame.hidden = video.hidden = image.hidden = true;

  if (type === "image") {
    title.textContent = name;
    image.alt = name;
    image.src = src;
    image.hidden = false;
  } else if (type === "video") {
    title.textContent = name;
    video.title = name;
    video.src = src;
    video.hidden = false;
    video.play().catch(() => {});
  } else {
    title.textContent = width && height ? `${name} · ${width}×${height}` : name;
    frame.title = `${name} interactive banner`;
    frame.width = width;
    frame.height = height;
    frame.src = src;
    frame.hidden = false;
  }

  document.body.style.overflow = "hidden";
  dialog.showModal();
}

dialog
  .querySelector(".banner-modal-close")
  .addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

// runs for the X button, backdrop click AND the Escape key
dialog.addEventListener("close", () => {
  frame.src = "about:blank"; // stops the banner playing
  video.pause();
  video.removeAttribute("src");
  video.load(); // releases the file
  document.body.style.overflow = "";
});
