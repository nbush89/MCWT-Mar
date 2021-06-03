interface Car{
    year: number
}
const dealership: Car[] = [
    {year:2010}
]
function expiredWaranty(car: Car): boolean{
    if(car.year <= 2010){
        return true
    }
    return false
}
let expired = expiredWaranty()
console.log(expiredWaranty(dealership[0]));

interface Pizza{
    name: string;
    calories: number;
    toppings: string[];
}

const pizzas = [
    {name:'Pep', calories:120, toppings:['Pepporoni']}
]

function doesPizzaHaveTopping(pizza:Pizza, topping: string): boolean{
    //return pizza.toppings.includes(topping);
    if(pizza.toppings.includes(topping)){

    }
    let found = pizza.toppings.find((top)=>top.toLowerCase() === topping.toLowerCase())
    if(found){
        return true
    }
    return false;
    
}

function buildPizza(name:string, toppings:string[]):Pizza{
    const calories = 200 + 20 * toppings.length;
    const pizza:Pizza = {
        name,
        toppings,
        calories
    }
    return pizza;
}

function calculateTotalCalories(array:Pizza[]): number{
    let total = 0;
    for(const pizza of array){
        total += pizza.calories;
    }
    return total;
}