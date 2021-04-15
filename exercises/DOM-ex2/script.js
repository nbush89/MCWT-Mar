let menuButton = document.querySelector("button");
let menu = document.querySelector(".menu");
let lettersLink = document.querySelector(".letters-link");
let numbersLink = document.querySelector(".numbers-link");
const letters = document.querySelector(".letters");
const numbers = document.querySelector(".numbers");
function showMenu(event) {
  console.log(event);
  menu.classList.toggle("hide-menu");
}
function showNumbers() {
  letters.style.display = "none";
  numbers.style.display = "block";
}
function showLetters() {
  numbers.style.display = "none";
  letters.style.display = "block";
}
menuButton.addEventListener("click", showMenu);
lettersLink.addEventListener("click", showLetters);
numbersLink.addEventListener("click", showNumbers);
//another way

function lettersNumbers(event) {
  console.log(event);
  if (event.target.className === "letters-link") {
    numbers.style.display = "none";
    letters.style.display = "block";
  } else if (event.target.className === "numbers-link") {
    numbers.style.display = "block";
    letters.style.display = "none";
  }
}
menu.addEventListener("click", lettersNumbers);
