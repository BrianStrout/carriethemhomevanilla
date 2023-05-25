import { introduce } from "./src/modules/introduction.js";

introduce();

const clearCards = () => {
  document.querySelectorAll(".sec--card").forEach((link) => {
    if (!link.classList.contains("transition--cover"))
      link.classList.add("transition--cover");
    link.classList.add("hiiiit");
  });
};

document.addEventListener("click", (e) => {
  // console.log(e.target);
  switch (e.target.id) {
    case "navmis":
      clearCards();
      document
        .getElementById("missionCard")
        .classList.remove("transition--cover");
      break;
    case "navres":
      clearCards();
      document
        .getElementById("resourceCard")
        .classList.remove("transition--cover");
      break;
    case "navgal":
      clearCards();
      document
        .getElementById("galleryCard")
        .classList.remove("transition--cover");
      break;
    case "navcon":
      clearCards();
      document
        .getElementById("contactCard")
        .classList.remove("transition--cover");
      break;
  }
});
