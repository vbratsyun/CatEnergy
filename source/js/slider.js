const exampleSlider = document.querySelector(".example__slider");
const example = document.querySelector(".example__before-after");
const buttons = example.querySelectorAll('.example__button');
const exampleControl = example.querySelector(".example__range-scale-control");

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