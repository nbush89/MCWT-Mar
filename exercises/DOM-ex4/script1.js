let total = 0; //keeps running total, must be outside the event listener so it doesnt reinitialize to 0 every time you click
let coinsArea = document.querySelector(".coins-area");
let form = document.querySelector("form");
let totalChange = document.querySelector(".total");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  let data = new FormData(form);
  let coinCount = data.get("qty");
  let coinType = data.get("coin");
  for (let i = 0; i < coinCount; i++) {
    //countCount allows us to know when the loop should stop
    let coin = document.createElement("div");
    coin.classList.add("coin");
    // coin.innerText = coinType;
    coin.id = coinType;
    coin.classList.add(coinType);
    if (coinType === "penny") {
      total += 1;
    } else if (coinType === "nickel") {
      total += 5;
    } else if (coinType === "dime") {
      total += 10;
    } else {
      total += 25;
    }
    coinsArea.append(coin);
  }
  totalChange.innerText = `Your total money is $${(total / 100).toFixed(2)}`;
});
coinsArea.addEventListener("click", (e) => {
  e.target.remove();
  console.log(e);
  if (e.target.id === "penny") {
    total -= 1;
    // e.target.remove()
  } else if (e.target.id === "nickel") {
    total -= 5;
  } else if (e.target.id === "dime") {
    total -= 10;
  } else if (e.target.id === "quarter") {
    total -= 25;
  }
  totalChange.innerText = `Your total money is $${(total / 100).toFixed(2)}`;
  //added comment
});
