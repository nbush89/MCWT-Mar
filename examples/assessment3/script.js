document.getElementById('toggleColor')
    .addEventListener('click',(_)=>{
        document.body.classList.toggle('coral');
    })
let counter = 1;
document.getElementById('addBox')
    .addEventListener('click',()=>{
        let div = document.createElement('div');
        div.classList.add('box');
        div.setAttribute('title',"I'm a box!");
        div.innerText = counter++;
        //div.addEventListener('click',remove)
        document.body.appendChild(div);
        
    })
    function remove(event){
        event.target.remove();
    }
document.body.addEventListener('click',(event)=>{
    if(event.target.classList.contains('box')){
        event.target.remove();
    }
})