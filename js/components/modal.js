const dialog = document.createElement("dialog");
dialog.className = "banner-modal";
dialog.innerHTML = `
  <div class="banner-modal-bar">
    <p class="banner-modal-title"></p>
    <button type="button" class="banner-modal-close" aria-label="Close">✕</button>
  </div>
  <iframe class="banner-modal-frame" hidden></iframe>
  <video class="banner-modal-video" controls playsinline hidden></video>
`;
document.body.append(dialog);

const title = dialog.querySelector(".banner-modal-title");
const frame = dialog.querySelector(".banner-modal-frame");
const video = dialog.querySelector(".banner-modal-video");

export function openMedia({
  type = "iframe",
  src,
  title: name,
  width,
  height,
}) {
  title.textContent = width && height ? `${name} · ${width}×${height}` : name;

  if (type === "video") {
    frame.hidden = true;
    video.hidden = false;
    video.title = name;
    video.src = src;
    video.play().catch(() => {}); // autoplay can be blocked; controls still work
  } else {
    video.hidden = true;
    frame.hidden = false;
    frame.title = `${name} interactive banner`;
    frame.width = width;
    frame.height = height;
    frame.src = src;
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
