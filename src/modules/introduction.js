import { Animator } from "./animater.js";
const carrieColor = document.querySelector(".photo--fade-color");
const carrieBW = document.querySelector(".photo--fade-bnw");
const carrieSolo = document.querySelector(".photo--fade-solo");

const photoIntro = Array.from(document.querySelectorAll(".photo--intro"));

const introduce = () => {
  console.log("intro");

  setTimeout(() => {
    console.log("timer ding");
    photoIntro.forEach((photo) => {
      if (photo.classList.contains("photo--fade-color")) {
        photo.classList.add("trans");
      }
      photo.classList.remove("photo--zoomed");
    });
  }, 2200);

  setTimeout(() => {
    Animator("class", "title--letter", "add", "drop--in", 50);
    // document.querySelectorAll(".paused").forEach((slide) => {
    //   slide.classList.remove("paused");
    // });
  }, 3000);

  setTimeout(() => {
    document.getElementById("mainCard").classList.remove("transition--cover");

    document.querySelectorAll(".slides").forEach((slide) => {
      slide.classList.remove("paused");
    });
  }, 5000);
  setTimeout(() => {
    document.querySelectorAll(".nav--hero").forEach((link) => {
      link.classList.remove("transition--cover");
    });
  }, 6500);
  setTimeout(() => {
    document.querySelectorAll(".nav--link").forEach((link) => {
      link.classList.remove("transition--cover");
    });
    document.querySelector("footer").classList.remove("transition--cover");
  }, 7500);
};
export { introduce };
