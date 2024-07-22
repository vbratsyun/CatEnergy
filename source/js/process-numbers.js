const processNumbers = document.querySelectorAll(".process__number");
processNumbers.forEach((num, index) => {
  num.textContent = index + 1;
  num.classList.add(".process__number");
});
