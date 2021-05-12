function printTens() {
  for (let i = 10; i <= 100; i += 10) {
    console.log(i);
  }
}
// printTens();

function countUntilTens(step) {
  let number = step;
  while (number % 10 !== 0) {
    console.log(number);
  }
}

function hasVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let letter of word) {
    if (vowels.find((item) => item === letter)) {
      return true;
    }
  }
  return false;
}
// console.log(hasVowels("hsjdfr"));

function testTemperature(desiredTemp, actualTemp) {
  if (desiredTemp > actualTemp) {
    console.log("Run heat");
  } else if (desiredTemp < actualTemp) {
    console.log("Run A/C");
  } else {
    console.log("Stand by");
  }
}

const dealership = [
  { make: "Toyota", model: "Prius", year: "2020", hybrid: false },
  { make: "Toyota", model: "Prius", year: "2021", hybrid: true },
  { make: "Ford", model: "F-150", year: "2015", hybrid: false },
  { make: "Ferrari", model: "Enzo", year: "2004", hybrid: false },
];
//2 parameters
//RETURN an array
const findCars = (arrayOfCars, modelInput) => {
  //   return arrayOfCars.filter((car) => car.model === model);
  //THIS^^^ is the same as below
  const newArrayOfCars = [];
  for (let car of arrayOfCars) {
    if (car.model === modelInput) {
      newArrayOfCars.push(car);
    }
  }
  return newArrayOfCars;
};

// console.log(findCars(dealership, "Prius"));

function addCar(arrayOfCars, make, model, hybrid) {
  const newCar = { make: make, model: model, year: "2021", hybrid: hybrid };
  arrayOfCars.push(newCar);
}

function areThereAnyHybridsForSale(arrayOfCars) {
  const foundHybrid = arrayOfCars.find((item) => item.hybrid);
  if (foundHybrid) {
    return true;
  }
  //Above^^ is the doing the same thing as commented out code below
  //   arrayOfCars.forEach((car) => {
  //     if (car.hybrid) {
  //       return ture;
  //     }
  //   });
  return false;
}

console.log(areThereAnyHybridsForSale(dealership));
