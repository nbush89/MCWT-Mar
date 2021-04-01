const actualTemp = 60;
let desiredTemp = 70;

if(actualTemp < desiredTemp ){
    console.log('Run Heat');
}else if(actualTemp > desiredTemp){
    console.log('Run A/C');
}else if(actualTemp === desiredTemp){
    console.log("Standby");
}

let tempCelsius = 30;
let targetUnit = '';

targetUnit.length
console.log(`${targetUnit} is my target unit`)
switch(targetUnit){
    case 'F':
        console.log(tempCelsius * (9/5) + 32)
        break;
    case 'K':
        console.log(tempCelsius + 273.15);
        break;
    case 'C':
        console.log("You entered celsius")
        console.log(tempCelsius);
        break;
    default:
        console.log(tempCelsius);
}