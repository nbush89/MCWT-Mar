
function chooseFormality(event){
    let formality;
    switch(event.toLowerCase()){
        case 'casual':
            formality = "something comfy"
            break;
        case 'semi-formal':
            formality = 'a polo'
            break;
        case 'formal':
            formality = 'a suit'
            break;
        default:
            formality = 'whatever you want'
    }
    return formality;
}

function chooseWardrobe(event, temp){
    let formality = chooseFormality(event);
    let covering;
    if(temp < 54 ){
        covering = "a coat"
    }else if(temp >= 54 && temp <= 70){
        covering = 'a jacket'
    }else if(temp > 70){
        covering = 'no jacket'
    }
    return formality + ' and ' + covering;
}

module.exports = chooseWardrobe;