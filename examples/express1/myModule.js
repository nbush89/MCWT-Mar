function test1(){
    console.log("I am a function");
}

const testVar = "I am a variable";

//export multiple
module.exports = {test1, testVar}
//export single
// module.exports = test1