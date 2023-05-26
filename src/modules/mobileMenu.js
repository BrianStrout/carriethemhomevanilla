let menuOut = false;

const mobileMenu = () => {
  if (!menuOut) {
    navMenu.classlist.add("slide--out-menu");
    navHero.classlist.add("slide--backinline");
  }
  if (menuOut) {
    navMenu.classlist.remove("slide--out-menu");
    navHero.classlist.remove("slide--backinline");
  }
};

export { mobileMenu };
