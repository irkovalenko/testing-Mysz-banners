import { loadComponent } from "./loadComponent.js";

const headerUrl = new URL("../components/header.html", import.meta.url);

loadComponent("header", headerUrl);
