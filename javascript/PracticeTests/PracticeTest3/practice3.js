let cells = document.querySelectorAll(".cell"); //use querySelectorAll when you want to select more than one class - returns a list
let grid = document.querySelector(".grid");
let randNum = Math.floor(Math.random() * 16);
cells[randNum].id = "it";
console.log(cells);
grid.addEventListener("click", colorCells);

function colorCells(e) {
  if (e.target.className === "cell") {
    if (!e.target.id) {
      e.target.classList.add("green");
    } else {
      e.target.classList.add("red");
      e.target.innerText = "IT";
      document.body.classList.add("black");
      grid.removeEventListener("click", colorCells);
    }
  }
}
