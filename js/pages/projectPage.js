export function createProjectPage(project) {
  return `
    <section class="project-hero">
      <div>
        <p class="project-number">${project.number} · ${project.discipline}</p>
        <h1 class="project-title">${project.title}</h1>
      </div>
      <div class="project-info">
        <p class="project-description">${project.description}</p>
        <div class="project-meta">
          <span>Role<br /><b>${project.role}</b></span>
          <span>Year<br /><b>${project.year}</b></span>
        </div>
      </div>
    </section>

    <div class="project-content" id="project-content"></div>
  `;
}
