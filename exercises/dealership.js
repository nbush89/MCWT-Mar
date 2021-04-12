function hasVowels(word){
    let vowels = ['a','e', 'i', 'o', 'u'];
    vowels.forEach((vowel)=>{

    })
    for(let vowel of vowels){
        if(word.toLowerCase().includes(vowel)){
            return true;
        }
    }
    return false;
}

//  console.log(hasVowels('may'));
//  console.log(hasVowels('Might'));
//  console.log(hasVowels('mqwtfgy'));

 let printTens = ()=>{
     let i = 0;
    do{
         i+=10;
         console.log(i);
     } while(i < 100)
     i=10;
     while(i<=100){
         console.log(i);
         i+=10;
     }
     for(i=10;i<=100; i+=10){
         console.log(i);
     }
 }
 //printTens();

 const dealership = [
     {
         make: "Toyota",
         model: "Prius",
         year: 2020,
         hybrid: false
    },
    {
        make: "Toyota",
        model: "Prius",
        year: 2021,
        hybrid: false
   },
   {
    make: "Ford",
    model: "F-150",
    year: 2015,
    hybrid: false
    },
    {
        make: "Ferrari",
        model: "Enzo",
        year: 2004,
        hybrid: false
    },
 ];

 function findCars(arrayofCars, model){
    //  return arrayofCars.filter((car)=>{
    //      return car.model.toLowerCase() === model.toLowerCase();
    //  })
    let matchedCars = [];
     for(let car of arrayofCars){
         if(car.model.toLowerCase() === model.toLowerCase()){
             matchedCars.push(car);
         }
     }
     return matchedCars;
 }
//  console.log(findCars(dealership, 'Prius'));
//  console.log(findCars(dealership, 'pRiUs'));
//  console.log(findCars(dealership, 'f-150'));
//  console.log(findCars(dealership, 'saerthyu'));

function areThereAnyHybridsForSale(arrayofCars){
    // let found = arrayofCars.find((car)=>car.hybrid);
    
    // return !!found;
    for(let car of arrayofCars){
        if(car.hybrid){
            return true;
        }
    }
    return false;
}

console.log(areThereAnyHybridsForSale(dealership));

