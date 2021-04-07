let array = [
    {
        name:"name",
        score: 60,
        date: '4/25/2021',
        passed: true
    },
    {
        name:"name2",
        score: 75,
        date: '4/25/2021',
        passed: true
    },
    {
        name:"name3",
        score: 40,
        date: '4/25/2021',
        passed: true
    },
    {
        name:"name5",
        score: 90,
        date: '4/25/2021',
        passed: true
    },
];
let lowestScore=array[0];
array.forEach((element)=>{
    console.log(element.name);
    console.log(element.score);
    if(!lowestScore){
        lowestScore = element;
    }else if(lowestScore.score > element.score){
        lowestScore = element;
    }
});
console.log(lowestScore);

for(let element of array){
    if(!lowestScore){
        lowestScore = element;
    }else if(lowestScore.score > element.score){
        lowestScore = element;
    }
}
let firstElement = array.shift();
console.log(firstElement);
function addToArray(array, newName, newScore, newDate){
    let newObject = {
        name: newName,
        score: newScore,
        date: newDate
    }
    if(newObject.score >=60){
        newObject.passed = true;
    }else{
        newObject.passed = false;
    }
    array.unshift(newObject);
}

addToArray(array,"name-1",100,'4/25/2021')
addToArray(array,"name-2",30,'2/25/2021')
console.log(array);

