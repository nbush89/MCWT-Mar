let fs = require('fs');
function test(i){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(i);
            resolve('I am finished '+ i)
        },1000 * Math.floor(Math.random() * 5));
    })
}

(async function(){
    try {
        let promises = []
        for(let i=0; i<5; i++){
            promises.push(test(i))
        }
        await Promise.all(promises);
        console.log(promises);
        console.log('After promise');
    } catch (error) {
        console.error(error)
    }
   console.log("After try catch");
})()