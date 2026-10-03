export function createProjectCard(project) {
  return `
    <a class="work-card tone-${project.tone}" href="${project.nav}">
      <img class="work-card-image" src="${project.image}" alt=""
           width="${project.imageWidth}" height="${project.imageHeight}" loading="lazy" />
      <div class="work-card-overlay"></div>
      <div class="work-card-content">
        <div class="work-card-top">
          <span>${project.number} / ${project.year}</span>
          <span class="work-card-arrow" aria-hidden="true">↗</span>
        </div>
        <div>
          <p class="work-card-discipline">${project.discipline}</p>
          <h3 class="work-card-title">${project.title}</h3>
        </div>
      </div>
    </a>
  `;
}
