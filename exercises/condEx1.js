const desiredTemp = 75;
const actualTemp = 60;

if (actualTemp > desiredTemp) {
  console.log("Turn on A/C");
} else if (desiredTemp > actualTemp) {
  console.log("Turn on the heat");
} else {
  console.log("Standby");
}

//Extended Challenge

const tempCelsius = 0;
const targetUnit = "F";

switch (targetUnit) {
  case "C":
    console.log(`The temperature is ${tempCelsius}`);
    break;
  case "F":
    console.log(`The Temperature is ${tempCelsius * (9 / 5) + 32}`);
    break;
  case "K":
    console.log(`The temperature is ${tempCelsius + 273.15}`);
    break;
  default:
    console.log("Please enter a valid unit");
}
