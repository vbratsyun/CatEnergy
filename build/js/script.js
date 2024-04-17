const navMain = document.querySelector(".page-nav");
const navToggle = document.querySelector(".page-nav__toggle");
const exampleSlider = document.querySelector(".example__slider");
const example = document.querySelector(".example__before-after");
const buttons = example.querySelectorAll('.example__button');
const exampleControl = example.querySelector(".example__range-scale-control");


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

const onButtonClick = (event) => {
  const imageAfter = exampleSlider.querySelector(".example__image--after");
  const imageBefore = exampleSlider.querySelector(".example__image--before");

  if (event.target.matches(".example__button--after")) {
    imageAfter.classList.remove("hidden");
    imageBefore.classList.add("hidden");
    exampleControl.setAttribute("value", "2");
  } else {
    imageAfter.classList.add("hidden");
    imageBefore.classList.remove("hidden");
    exampleControl.setAttribute("value", "1");
  }
}

buttons.forEach((button) => button.addEventListener("click", onButtonClick));

const processNumbers = document.querySelectorAll(".process__number");
processNumbers.forEach((num, index) => {
  num.textContent = index + 1;
  num.classList.add(".process__number");
});
