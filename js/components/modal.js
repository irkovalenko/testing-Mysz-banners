const dialog = document.createElement("dialog");
dialog.className = "banner-modal";
dialog.innerHTML = `
  <iframe class="banner-modal-frame" hidden></iframe>
  <video class="banner-modal-video" controls playsinline hidden></video>
  <img class="banner-modal-image" alt="" hidden>

`;
document.body.append(dialog);

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
    image.alt = name;
    image.src = src;
    image.hidden = false;
  } else if (type === "video") {
    video.title = name;
    video.src = src;
    video.hidden = false;
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
  video.removeAttribute("src");
  video.load(); // releases the file
  document.body.style.overflow = "";
});
