import { introduce } from "./src/modules/introduction.js";
import {
  verName,
  verEmail,
  verMessage,
  validator,
} from "./src/modules/formValidation.js";
import { mobileMenu } from "./src/modules/mobileMenu.js";

introduce();

const clearCards = () => {
  document.querySelectorAll(".sec--card").forEach((link) => {
    if (!link.classList.contains("transition--cover"))
      link.classList.add("transition--cover");
    link.classList.add("hiiiit");
  });
};

document.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  switch (e.target.id) {
    case "navmis":
      clearCards();
      document
        .getElementById("missionCard")
        .classList.remove("transition--cover");
      mobileMenu();
      break;
    case "navres":
      clearCards();
      document
        .getElementById("resourceCard")
        .classList.remove("transition--cover");
      mobileMenu();
      break;
    case "navgal":
      clearCards();
      document
        .getElementById("galleryCard")
        .classList.remove("transition--cover");
      mobileMenu();
      break;
    case "navcon":
      clearCards();
      document
        .getElementById("contactCard")
        .classList.remove("transition--cover");
      mobileMenu();
      break;
    case "navhero":
      mobileMenu();
      break;

    case "linkedin":
      window.open(
        "https://www.linkedin.com/in/carrie-thomas-bba30a4/",
        "_blank"
      );
      break;
    case "stroutco":
      window.open("https://www.strout.co", "_blank");
      break;

    case "submit":
      e.preventDefault;
      console.log("subby");
      validator();
      break;
  }
});
