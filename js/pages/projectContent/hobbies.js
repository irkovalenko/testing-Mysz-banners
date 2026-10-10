import { hobby_works } from "../../data/hobby_works.js";
import { createMediaStage } from "../../components/mediaStage.js";
import "../../components/videoModal.js";

const studiesUrl = new URL(
  "../../../resources/projects/hobbies/",
  import.meta.url,
);
const studyUrl = (file) => new URL(file, studiesUrl).href;

export function renderHobbies(container) {
  container.innerHTML = `

    <section class="stage-section">

      <div class="stage-grid">
        ${createMediaStage({
          ratio: "landscape",
          video: studyUrl("blue-box.mp4"),
          wide: true,
        })}
        ${createMediaStage({
          ratio: "portrait",
          video: studyUrl("ichigo.mp4"),
        })}
         ${createMediaStage({
           ratio: "portrait",
           video: studyUrl("rukia.mp4"),
         })}
        
      </div>
    </section>
  `;
}
