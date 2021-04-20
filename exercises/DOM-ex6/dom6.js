// for (let i = 0; i <= 99; i++) {
//   let square = document.createElement("div");
//   square.classList.add("square");
//   grid.append(square);
// }
// let squares = document.querySelectorAll(".square");
// buttons.addEventListener("click", (e) => {
//   if (e.target.id === "red") {
//     grid.addEventListener("click", (event) => {
//       console.log(event);
//       if (event.target.className === "square") {
//         event.target.style.backgroundColor = "red";
//       }
//     });
//   }
//   if (e.target.id === "blue") {
//     grid.addEventListener("click", (event) => {
//       if (event.target.className === "square") {
//         event.target.style.backgroundColor = "blue";
//       }
//     });
//   }
//   if (e.target.id === "green") {
//     grid.addEventListener("click", (event) => {
//       if (event.target.className === "square") {
//         event.target.style.backgroundColor = "green";
//       }
//     });
//   }
//   if (e.target.id === "clear") {
//     squares.forEach((square) => {
//       square.style.backgroundColor = "black";
//     });
//   }
// });
let grid = document.querySelector(".gridArea");
let buttons = document.querySelector(".buttons");
for (i = 0; i < 100; i++) {
  let square = document.createElement("div");
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
    let squares = document.querySelectorAll(".square");
    squares.forEach((item) => {
      item.style.backgroundColor = "black";
    });
  }
});
