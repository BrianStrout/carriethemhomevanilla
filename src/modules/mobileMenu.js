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
