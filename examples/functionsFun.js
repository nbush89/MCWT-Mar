
// let greetClass  = (className = "Default") => {
//     return `Hello ${className} class!!!`;
//   }
// const myClass = 'the bestest'
// const classGreeted = greetClass();
// console.log(classGreeted());

//Area = length * width and Perimeter = 2*(length + width)
function logRectInfo(topLeft, bottomRight){
    const width = bottomRight[0] - topLeft[0];
    const length = topLeft[1] - bottomRight[1];
    //Log perimeter
    console.log("Perimeter: " + 2*(length + width))
    //log Area
    console.log('Area: ' + length * width)
}

logRectInfo([0,5], [3,2]);
//Call 2 more times
logRectInfo([0,10],[10,0])
logRectInfo([2,2],[4,0])
logRectInfo([5,8],[11,65])
