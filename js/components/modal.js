const dialog = document.createElement("dialog");
dialog.className = "banner-modal";
dialog.innerHTML = `
  <iframe class="banner-modal-frame" hidden></iframe>
<div class="banner-modal-video-wrap" hidden>
    <video class="banner-modal-video" playsinline></video>
    <button
      class="banner-modal-mute"
      type="button"
      aria-label="Unmute video"
      aria-pressed="true"
      hidden
    >
      🔇
    </button>
  </div>


  <img class="banner-modal-image" alt="" hidden>
`;
document.body.append(dialog);

const frame = dialog.querySelector(".banner-modal-frame");
const videoWrap = dialog.querySelector(".banner-modal-video-wrap");
const video = dialog.querySelector(".banner-modal-video");
const image = dialog.querySelector(".banner-modal-image");
const muteButton = dialog.querySelector(".banner-modal-mute");

muteButton.addEventListener("click", () => {
  video.muted = !video.muted;

  if (video.muted) {
    muteButton.textContent = "🔇";
    muteButton.setAttribute("aria-label", "Unmute video");
    muteButton.setAttribute("aria-pressed", "true");
  } else {
    muteButton.textContent = "🔊";
    muteButton.setAttribute("aria-label", "Mute video");
    muteButton.setAttribute("aria-pressed", "false");
  }
});

export function openMedia({
  type = "iframe",
  src,
  title: name = "",
  width,
  height,
  showreel = false,
}) {
  frame.hidden = videoWrap.hidden = image.hidden = true;
  muteButton.hidden = true;

  if (type === "image") {
    image.alt = name;
    image.src = src;
    image.hidden = false;
  } else if (type === "video") {
    video.title = name;
    video.src = src;
    videoWrap.hidden = false;

    if (showreel) {
      muteButton.hidden = false;
      video.muted = true;

      muteButton.textContent = "🔇";
      muteButton.setAttribute("aria-label", "Unmute video");
      muteButton.setAttribute("aria-pressed", "true");
    }

    video.play().catch(() => {});
  } else {
    frame.title = `${name} interactive banner`;
    frame.width = width;
    frame.height = height;
    frame.src = src;
    frame.hidden = false;
  }

  document.body.style.overflow = "hidden";
  dialog.showModal();
}

dialog.addEventListener("click", (e) => {
  if (e.target === dialog || e.target === image) dialog.close();
});

// runs for the X button, backdrop click AND the Escape key
dialog.addEventListener("close", () => {
  frame.src = "about:blank"; // stops the banner playing
  video.pause();
  video.muted = true;
  video.removeAttribute("src");
  muteButton.hidden = true;
  muteButton.textContent = "🔇";
  muteButton.setAttribute("aria-label", "Unmute video");
  muteButton.setAttribute("aria-pressed", "true");
  video.load(); // releases the file
  document.body.style.overflow = "";
});
