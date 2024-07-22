const navMain = document.querySelector(".page-nav");
const navToggle = document.querySelector(".page-nav__toggle");


navMain.classList.remove("page-nav--nojs");

const onNavToggleClick = () => {
  if (navMain.classList.contains("page-nav--closed")) {
    navMain.classList.remove("page-nav--closed");
    navMain.classList.add("page-nav--opened");
  } else {
    navMain.classList.add("page-nav--closed");
    navMain.classList.remove("page-nav--opened");
  }
};

navToggle.addEventListener("click", onNavToggleClick);



