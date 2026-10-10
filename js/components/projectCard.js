const siteRoot = new URL("../../", import.meta.url);
export function createProjectCard(project) {
  const href = new URL(`projects/${project.slug}`, siteRoot).href;
  return `
    <a class="work-card tone-${project.tone}" href="${href}">
      <img class="work-card-image" src="${project.image}" alt=""
           width="${project.imageWidth}" height="${project.imageHeight}" loading="lazy" />
      <div class="work-card-overlay"></div>
      <div class="work-card-content">
          <svg class="work-card-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" focusable="false">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        <div>
          <p class="work-card-discipline">${project.discipline}</p>
          <h3 class="work-card-title">${project.title}</h3>
        </div>
      </div>
    </a>
  `;
}
