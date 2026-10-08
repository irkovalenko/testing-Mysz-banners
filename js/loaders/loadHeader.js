import { loadComponent } from "./loadComponent.js";

const headerUrl = new URL("../../components/header.html", import.meta.url);
const siteRoot = new URL("../../", import.meta.url);

await loadComponent("header", headerUrl);

const links = document.querySelectorAll("#header nav a[href]");

links.forEach((a) => {
  a.href = new URL(a.getAttribute("href"), siteRoot).href;
});

function setActive(section) {
  links.forEach((a) => {
    const isActive = a.dataset.section === section;
    a.classList.toggle("active", isActive);
    if (isActive) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

const normalize = (path) => path.replace(/index\.html$/, "");
const onHomePage =
  normalize(location.pathname) === normalize(siteRoot.pathname);

if (document.body.dataset.section) {
  // detail pages (e.g. a single project) declare their section explicitly
  setActive(document.body.dataset.section);
} else if (onHomePage) {
  // home page: highlight whichever section is currently in view
  const sections = [
    { key: "home", selector: "#hero" },
    { key: "about", selector: "#about" },
    { key: "projects", selector: "#work" },
  ];

  const update = () => {
    const line = window.innerHeight * 0.35;
    let current = "home";

    for (const { key, selector } of sections) {
      const el = document.querySelector(selector);
      if (el && el.getBoundingClientRect().top <= line) current = key;
    }

    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
    if (atBottom) current = sections[sections.length - 1].key;

    setActive(current);
  };

  addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);

  new ResizeObserver(update).observe(document.body);
  update();
}

const navContainer = document.querySelector("#header .nav-container");
if (navContainer) {
  new ResizeObserver(() => {
    document.documentElement.style.setProperty(
      "--header-h",
      navContainer.offsetHeight + "px",
    );
  }).observe(navContainer);
}
