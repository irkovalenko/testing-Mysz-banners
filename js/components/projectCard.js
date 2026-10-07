const siteRoot = new URL("../../", import.meta.url);
export function createProjectCard(project) {
  const href = new URL(
    `pages/projects/project.html?p=${project.slug}`,
    siteRoot,
  ).href;
  return `
    <a class="work-card tone-${project.tone}" href="${href}">
      <img class="work-card-image" src="${project.image}" alt=""
           width="${project.imageWidth}" height="${project.imageHeight}" loading="lazy" />
      <div class="work-card-overlay"></div>
      <div class="work-card-content">
          <span class="work-card-arrow" aria-hidden="true">↗</span>
        <div>
          <p class="work-card-discipline">${project.discipline}</p>
          <h3 class="work-card-title">${project.title}</h3>
        </div>
      </div>
    </a>
  `;
}
