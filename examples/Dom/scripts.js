function main(){
    let el = document.getElementById('grow-me');
    el.classList.add('big');
    el = document.getElementById('shrink-me');
    el.classList.remove('big')
    let listItems = document.querySelectorAll('li');
    listItems.forEach(element=>console.log(element.textContent));
    let link = document.querySelector('a');
    link.setAttribute('href',"https://www.example.com");
    link.innerText = "somewhere";
    let hideMe = document.getElementById('hide-me');
    hideMe.style.display = "none"
    document.getElementById('show-me').style.display = "block"
    let inputName = document.getElementById('name').value
    let h1 = document.querySelector('h1');
    h1.innerText = "Welcome " + inputName;
    let radio = document.querySelector(
        'input[name="button"]:checked'
        );
    console.log(radio);
}