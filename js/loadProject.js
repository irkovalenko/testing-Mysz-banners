import { projects } from "./data/projects.js";
import { createProjectPage } from "./pages/projectPage.js";
import { projectContent } from "./pages/projectContent/index.js";

const root = document.querySelector("#project");
if (!root) throw new Error('Missing <div id="project"></div> in project.html');

const slug = new URLSearchParams(location.search).get("p");
const project = projects.find((item) => item.slug === slug);

if (!project) {
  root.innerHTML = `<p>Project not found.</p>`;
} else {
  document.title = project.title.replace("\n", " ");
  root.innerHTML = createProjectPage(project);

  const loadContent = projectContent[project.slug];
  const slot = root.querySelector("#project-content");

  if (loadContent && slot) {
    const render = await loadContent();
    render(slot, project);
  }
}
