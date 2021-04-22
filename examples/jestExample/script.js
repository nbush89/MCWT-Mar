function tempConvert(temp, unit){
    let convertedTemp;
    if(unit.toLowerCase() === 'c'){
        convertedTemp = (temp - 32) * (5/9)
    }else{
        convertedTemp = (temp * (9/5)) + 32
    }
    
    return convertedTemp;
}

module.exports = tempConvert