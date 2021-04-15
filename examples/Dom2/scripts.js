
// let element = document.createElement('div')
// element.innerText = "I was created in javascript"
// element.style.fontSize = "25px";
// document.body.append(element);
// element = document.createElement('h1');
// element.innerText = "H1 created in the console!!!"
// element.style.fontSize = "45px";

// document.querySelector('div').append(element);


// let button = document.getElementById('myButton');
// function clickHandler(event){
//     event.preventDefault();
//     let h1 = document.querySelector('h1');
//     h1.classList.toggle('blue');
// }
// button.addEventListener('click',(clickHandler));
// document.querySelector('div').addEventListener('click',clickHandler);
// button.removeEventListener('click', clickHandler);

// const link = document.getElementById('link');
// link.addEventListener('click',clickHandler);

let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click',()=>{
    

    let letters = document.getElementById('letters');
    letters.classList.toggle('hide');
    let numbers = document.getElementById('numbers');
    numbers.classList.toggle('hide');
    showHideMenu();
})

function showHideMenu(){
    let menu = document.getElementById('menu');
    menu.classList.toggle('hide')
    // if(menu.style.display === 'block'){
    //     menu.style.display = 'none'
    // }else{
    //     menu.style.display = 'block'
    // }
}