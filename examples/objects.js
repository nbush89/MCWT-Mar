// const car = { make: "Ford", model: "Ranger", year: 2019, color: "blue" };
// let prop = 'make';
// console.log(car["make"]); // "Ford" is logged
// console.log(car[prop]); // "Ford" is logged
// console.log(car.model); // "Ranger" is logged
// console.log(car)
// delete car.color; // car no longer has a color key
// console.log(car)
// car.ecoFriendly = true; // car has an ecoFriendly key that is true
// console.log(car)

// const car = { 
//     make: "Ford", 
//     model: "Ranger", 
//     year: 2019, 
//     color: "blue",
//     turnOn() {
//       console.log("The car turns on.");
//     },
//     turnOff() {
//       console.log("The car turns off.");
//     },
//     paintTheCar(color) {
//       this.color = color;
//       console.log(`The car is now ${this.color}.`);
//       console.log(this)
//     }
//   };
  
//   car.turnOn();
//   car.paintTheCar("orange");

// class Student {
//     constructor(name, age){
//       this.name = name;
//       this.age = age;
//       this.sayHello();
//     }

//     sayHello(){
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
//     }
//   }
  
//   const tSwift = new Student("Taylor Swift", 30);
//   const grant = new Student("Grant Chirpus", 25);
// console.log(tSwift.name);
// console.log(grant.name);

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getDiameter(){
        return 2 * this.radius;
    }
    getArea(){
        return this.radius ** 2 * Math.PI 
    }
    getCircum(){
        return this.getDiameter() * Math.PI
    }
}

let circle = new Circle(4);
console.log(circle.getArea());
console.log(circle.getCircum());