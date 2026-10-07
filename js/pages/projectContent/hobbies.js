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
          label: "1920 × 1080 study / 03",
          video: studyUrl("blue-box.mp4"),
          title: "Study 03",
          wide: true,
        })}
        ${createMediaStage({
          ratio: "portrait",
          label: "1080 × 1920 study / 02",
          video: studyUrl("ichigo.mp4"),
          title: "Study 02",
        })}
         ${createMediaStage({
           ratio: "portrait",
           label: "1080 × 1920 study / 02",
           video: studyUrl("rukia.mp4"),
           title: "Study 02",
         })}
         ${createMediaStage({
           ratio: "landscape",
           label: "1920 × 1080 study / 03",
           video: studyUrl("missti.mp4"),
           title: "Study 03",
           wide: true,
         })}
        
      </div>
    </section>
  `;
}
