const grid = document.querySelector(".gridArea");
const buttons = document.querySelector(".buttons");
for (i = 0; i < 100; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  grid.append(square);
}
buttons.addEventListener("click", (e) => {
  if (e.target.id === "red") {
    grid.addEventListener("click", (e) => {
      if (e.target.className === "square") {
        e.target.style.backgroundColor = "red";
      }
    });
  }
  if (e.target.id === "green") {
    grid.addEventListener("click", (e) => {
      if (e.target.className === "square") {
        e.target.style.backgroundColor = "green";
      }
    });
  }
  if (e.target.id === "blue") {
    grid.addEventListener("click", (e) => {
      if (e.target.className === "square") {
        e.target.style.backgroundColor = "blue";
      }
    });
  }
  if (e.target.id === "clear") {
    const squares = document.querySelectorAll(".square");
    squares.forEach((item) => {
      item.style.backgroundColor = "black";
    });
  }
});
