import { hobby_works } from "../../data/hobby_works.js";
import { createVideoGallery } from "../../components/videoGallery.js";
import "../../components/videoModal.js";

export function renderHobbies(container) {
  container.innerHTML = createVideoGallery(hobby_works, "hobbies/");
}
