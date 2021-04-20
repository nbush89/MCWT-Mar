let hasClicked = [];
let gameOver = false;
//Setup grid
let it = Math.floor(Math.random() * 15) 
for(let i = 0; i<16; i++){
    let box=document.createElement('div');
    box.classList.add('box')
    if(i===it){
        box.setAttribute('id','it');
    }
    document.body.appendChild(box);
}

document.body.addEventListener('click',(event)=>{
    if(event.target !== document.body && !gameOver){
    //If "it" cell  
    if(event.target.id === 'it'){
        gameOver=true;
        //turn cell red
        //event.target.style.backgroundColor = 'red'
        turnColor(event.target, 'red');
        //then turn previous clicked cells yellow
        let clicked = document.querySelectorAll('.clicked');
        setYellow(hasClicked,hasClicked.length-1)
    }else{
        //Turn grid cell green
        //event.target.classList.add('clicked');
        turnColor(event.target, 'green')
        hasClicked.push(event.target);
    }
}
});
function turnColor(ele, color){
    ele.style.backgroundColor = "black";
    setTimeout(()=>{
        ele.style.backgroundColor = color
    },300)
}
function setYellow(ele,index){
    if(index>=0){
        setTimeout(()=>{
            //ele[index].classList.add('yellow');
            turnColor(ele[index], 'yellow')
            setYellow(ele,index-1);
        },200)
    }
    
}