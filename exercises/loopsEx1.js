//log numbers 1-10
let counter = 1;
for (let i = 1; i <= 10; i++) {
  console.log(`count = ${i}`);
}
//log numbers 10-1
for (i = 10; i >= 1; i--) {
  console.log(`count = ${i}`);
}
//while loop
while (counter <= 10) {
  console.log(`count = ${counter}`);
  counter++;
}
//do while loop
do {
  console.log(`count = ${counter}`);
  counter++;
} while (counter < 10);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for of loop
for (let num of array) {
  console.log(`count = ${num}`);
}
//for each loop
array.forEach((num) => {
  console.log(num);
});
//for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//extended Challenge
let myString = "Nicole";
while (myString.length < 10) {
  myString = " " + myString;
}
console.log(myString);
