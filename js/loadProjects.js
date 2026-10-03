import { createProjectCard } from "./components/projectCard.js";
import { projects } from "./data/projects.js";

const grid = document.querySelector("#work-grid");
if (grid) grid.innerHTML = projects.map(createProjectCard).join("");
