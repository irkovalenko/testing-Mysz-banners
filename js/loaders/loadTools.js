import { tools } from "../data/tools.js";
import { createToolGrid } from "../components/toolGrid.js";

export function loadTools() {
  const grid = document.querySelector("#toolbox-grid");
  if (!grid) return;

  grid.innerHTML = tools.map(createToolGrid).join("");
}
