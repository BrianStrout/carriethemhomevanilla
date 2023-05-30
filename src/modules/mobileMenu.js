// import { clearCards } fro
let menuOut = false;
let navMenu = Array.from(document.querySelectorAll(".nav--link"));
let navHero = document.getElementById("navhero");
let title = document.querySelector(".title--container");

const mobileMenu = () => {
  console.log("!");
  if (!menuOut) {
    navMenu.forEach((link) => {
      link.classList.add("slide--out-menu");
    });
    title.classList.add("trans--mobile");

    navHero.classList.add("slide--backinline");
    menuOut = true;
    // clearCards();

    document.querySelectorAll(".sec--card").forEach((link) => {
      if (!link.classList.contains("transition--cover"))
        link.classList.add("transition--cover");
      link.classList.add("hiiiit");
    });

    return;
  }
  if (menuOut) {
    navMenu.forEach((link) => {
      link.classList.remove("slide--out-menu");
    });
    title.classList.remove("trans--mobile");
    navHero.classList.remove("slide--backinline");
    menuOut = false;
    return;
  }
};

export { mobileMenu };
