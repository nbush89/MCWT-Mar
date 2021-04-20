let form = document.getElementById('coinForm');
let coinArea = document.getElementById('coinArea');
let totalSpan = document.getElementById('total');
let total = 0;
let coinValues = {
    Penny: .01,
    Nickel: .05,
    Dime: .1,
    Quarter: .25
}
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
        coin.setAttribute('data-value',coinValues[coinType])
        let coinText = document.createElement('span');
        coinText.innerText = coinType;
        coin.appendChild(coinText);
        coinArea.appendChild(coin);
        total+= coinValues[coinType]
    }
    totalSpan.innerHTML = total.toFixed(2);
});

coinArea.addEventListener('click',(event)=>{
    if(event.target.classList.contains('coin')){
        let value = parseFloat(event.target.getAttribute('data-value'))
        updateTotal(-value); 
        event.target.remove();
        
    }else if(event.target.parentElement.classList.contains('coin')){
        let value = parseFloat(event.target.parentElement.getAttribute('data-value'))
        updateTotal(-value); 
        event.target.parentElement.remove();
    }
   
})

function updateTotal(value){
    total = total + value
    if(total < 0){
        total = 0;
    }
    totalSpan.innerHTML = total.toFixed(2);
}