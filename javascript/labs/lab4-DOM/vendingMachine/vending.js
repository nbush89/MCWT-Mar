const amount = document.querySelector(".amount");
const buttons = document.querySelector(".buttons");
const reset = document.querySelector(".reset");
let total = 0;
buttons.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.id === "cola") {
    total += 2;
  }
  if (e.target.id === "peanuts") {
    total += 3;
  }
  if (e.target.id === "choco") {
    total += 4;
  }
  if (e.target.id === "gummies") {
    total += 6;
  }
  amount.innerText = `$${total.toFixed(2)}`;
});
reset.addEventListener("click", (e) => {
  total = 0;
  amount.innerText = `$${total.toFixed(2)}`;
});
