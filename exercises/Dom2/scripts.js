let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click',showHideMenu);
function showHideMenu(){
    let menu = document.getElementById('menu');
    menu.classList.toggle('hide')
}
function showLetters(event){
    event.preventDefault();
    let letters = document.getElementById('letters');
    letters.classList.remove('hide');
    let numbers = document.getElementById('numbers');
    numbers.classList.add('hide');
    showHideMenu();
}
function showNumbers(event){
    event.preventDefault();
    let letters = document.getElementById('letters');
    letters.classList.add('hide');
    let numbers = document.getElementById('numbers');
    numbers.classList.remove('hide');
    showHideMenu();
}
document.getElementById('letters-link').addEventListener('click', showLetters);
document.getElementById('numbers-link').addEventListener('click', showNumbers);
