
// const listOfNames = [{first:"Adam", last:'Adam'}, {first:"John", last:"J"}];
// //Index                 0       1

// console.log(listOfNames)
// listOfNames.push('Last');
// listOfNames.unshift('First');
// console.log(listOfNames);
// const first = listOfNames.shift();
// const last = listOfNames.pop();
// const another = listOfNames.splice(0,2);
// console.log(listOfNames);
// console.log(first, last, another);

// function addNumbers(num1,num2,...numbers) {
//     let total = num1 + num2;
//     if(numbers.length){
//         total = numbers.reduce((prev, next) => {
//             console.log(prev, next);  
//             return prev + next
//             }, total);
//     }
//   return total
//   /*
//      return numbers.reduce((prev, next) =>{
//          return prev + next
//     });
//   */
 
// }
// console.log(addNumbers(1, 2)); // returns 3
// console.log(addNumbers(1, 2, 3, 4, 5)); // returns 15

const obj1 = { name: "Snoopy", age: 2 };
const obj2 = { name: obj1.name, age: obj1.age };
const obj3 = {...obj1} ; // obj3 contains the same keys/values as obj1
//obj1.name = "I CHanged";
console.log(obj3);
console.log(obj1 === obj3);
// const names1 = ["Adam", "Grace"];
// const names3 = ["Adam1", "Grace1"];
// const names2 = [ ...names1, ...names3 ]; // names2 contains the same elements as names1 and "Cody"
// console.log(names2);

// const computer = {
//     cpu: "Ryzen 7", motherboard: "Crosshair 7",
//     gpu: "NVidia 2080 TI", ram: "32GB G.SKILL TridentZ"
//   };
  
//   const { cpu, gpu, ram  } = computer;
//   console.log(gpu); // "NVidia 2080 TI"
//   console.log(ram); // "32GB G.SKILL TridentZ"
//   console.log(cpu);