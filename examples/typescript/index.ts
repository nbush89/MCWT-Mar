console.log("I worked")
console.log("I worked again")
console.log('a mistake')

function test(param: number){
    console.log("Number", param)
}
//error with type test('text');
interface People{
    firstName: string;
    friends?: People[]; //? makes it optional
    nicknames: string[];
}
//error return type
function test2(param: People, second: string): string {
    let returnValue;
    //error param can never equal a string
    if(param === 'test' || second === 'test'){
        returnValue = 'string'
    }
    return returnValue;
}
const person: People ={
    firstName: "Luke",
    friends:[{
        firstName: 'Han',
        nicknames:['Solo']
    }],
    nicknames:['Skywalker']
};
/**
 * npm init -y
 * npm install nodemon typescript
 * npx tsc --init
 * 
 * manually
 * npx tsc
 * *******OR********
 * automatically when file saved/changed
 * npx tsc --watch 
 * 
 * automatically after compiled
 * npx nodemon <javascript file>
 * *******OR*******
 * manually everytime
 * node <javascript file>
 */