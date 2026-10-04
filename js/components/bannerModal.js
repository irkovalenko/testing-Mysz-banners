// js/bannerModal.js
const dialog = document.createElement("dialog");
dialog.className = "banner-modal";
dialog.innerHTML = `
  <div class="banner-modal-bar">
    <p class="banner-modal-title"></p>
    <button type="button" class="banner-modal-close" aria-label="Close banner">✕</button>
  </div>
  <iframe class="banner-modal-frame"></iframe>
`;
document.body.append(dialog);

const title = dialog.querySelector(".banner-modal-title");
const frame = dialog.querySelector(".banner-modal-frame");

function openBanner({ src, width, height, name }) {
  title.textContent = `${name} · ${width}×${height}`;
  frame.title = `${name} interactive banner`;
  frame.width = width;
  frame.height = height;
  frame.src = src;
  document.body.style.overflow = "hidden";
  dialog.showModal();
}

// close on the X button
dialog
  .querySelector(".banner-modal-close")
  .addEventListener("click", () => dialog.close());

// close on backdrop click (the dialog has no padding, so a click on
// the dialog element itself can only be a click on the backdrop)
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

// runs for the X button, backdrop click AND the Escape key
dialog.addEventListener("close", () => {
  frame.src = "about:blank"; // stops the banner playing
  document.body.style.overflow = "";
});

// open from any gallery card (delegation, so it works for injected cards)
document.addEventListener("click", (e) => {
  const link = e.target.closest(".card-link");
  if (!link) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey) return; // let "open in new tab" work

  e.preventDefault();
  const preview = link.querySelector(".preview-frame");
  openBanner({
    src: link.href,
    width: preview.getAttribute("width"),
    height: preview.getAttribute("height"),
    name: preview.title,
  });
});
