"use strict"
// function myListener(event){
//     if(event.target.id === 'it'){
//         console.log("IT CLICKED")
//         document.body.removeEventListener('click', myListener)
//     }else if(event.target.classList.contains('cell')){
//         console.log('cell clicked')
//     }

// }
// const arrowListener = (event)=>{

// }
//document.body.addEventListener('click', myListener)
/**Can't be done this way as we need a named function
 * document.body.addEventListener('click', (event)=>{

*})
*/
//Other way
function myListener2(event){
    if(event.target.id === 'it'){
        //color it cell red and body black
        console.log("IT CLICKED")
        event.target.style.backgroundColor = 'red';
        document.body.style.backgroundColor = 'black'
        let cells = document.querySelectorAll('.cell');
        for(let cell of cells){
            cell.removeEventListener('click', myListener2)
        }
    }else {
        //color cell green
        console.log('cell clicked')
        event.target.style.backgroundColor = 'green';
    }

}
let cells = document.querySelectorAll('.cell');
cells[Math.floor(Math.random() * 15)].setAttribute('id', 'it'); 
for(let cell of cells){
    cell.addEventListener('click', myListener2)
}