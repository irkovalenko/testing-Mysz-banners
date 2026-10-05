import { createJobItem } from "../components/jobItems.js";
import { jobs } from "../data/jobs.js";

export function loadJobs(container) {
  container.innerHTML = jobs.map(createJobItem).join("");
}
