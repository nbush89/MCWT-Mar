let number = 0;
do {
    number++;
    console.log(number);
    
} while (number < 10);
console.log("-----------------------------------")
number = 10;
do {
    console.log(number);
    number--;    
} while (number > 0);
console.log("-----------------------------------")

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const todos = [
    {
        name:"Todo 1",
        complete: false
    }
]
for(let aNumber of todos){
    console.log(aNumber);
}
