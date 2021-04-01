(function(){
let characters =[
    {
        name:'Mario',
        health:25
    },
    {
        name:'Luigi',
        health: 20
    },
    {
        name: 'Peach',
        health: 40
    }
];
const opponent = {
    name: 'Bowser',
    health: 50
}
let userInput;
let battleOn = true;
do{
    for(let character of characters){
        console.log(`Name: ${character.name} Health: ${character.health}`)
    }
    console.log(`Opponent Name: ${opponent.name} Opponent Health: ${opponent.health}`)
    userInput = prompt('Choose your character','1');
    if(typeof userInput === 'undefined'){
        break;
    }
    if(!(userInput === '1' || 
    userInput === '2' || 
    userInput === '3')){
        console.log("-----------Invalid input--------------");
        continue;
    }
    let numInput = parseInt(userInput) - 1;
    if(characters[numInput].health<=0){
        console.log("Choose a different character");
        continue;
    }
    opponent.health = opponent.health - 5;
    characters[numInput].health -= 5;
    if(opponent.health <= 0){
        battleOn = false;
    }
    const charactersAlive = characters.filter(
        (character)=> character.health > 0
        )
    if(charactersAlive.length === 0){
        battleOn = false;
    }
}while(battleOn)
})();