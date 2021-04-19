let form = document.getElementById('coinForm');
let coinArea = document.getElementById('coinArea');

form.addEventListener('submit',(event)=>{
    let count = document.getElementById('count');
    let type = document.getElementById('type');
    event.preventDefault();
    let numberOfCoins = parseInt(count.value);
    let coinType = type.value;
    for(let num = 1; num<=numberOfCoins; num++){
        let coin = document.createElement('div');
        coin.classList.add('coin');
        coin.classList.add(coinType);
        let coinText = document.createElement('span');
        coinText.innerText = coinType;
        coin.appendChild(coinText);
        coinArea.appendChild(coin);
    }
});

coinArea.addEventListener('click',(event)=>{
    if(event.target.classList.contains('coin')){
        event.target.remove();
    }
    console.log(event.target);
    if(event.target.parentElement.classList.contains('coin')){
        event.target.parentElement.remove();
    }
})