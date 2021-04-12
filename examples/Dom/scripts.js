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
}