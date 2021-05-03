let cart = [
    {
        name:'item', 
        price:3.50,
        quantity: 2
    },
    {
        name:'item2', 
        price:0.50,
        quantity: 20
    }
]

let cartToLocal = JSON.stringify(cart);

window.localStorage.setItem('cart',cartToLocal);

let cartFromStorage = JSON.parse(window.localStorage.getItem('cart'));

cartFromStorage.push({
    name:'item3', 
    price:1.50,
    quantity: 3
})
localStorage.setItem('cart', JSON.stringify(cartFromStorage));

//localStorage.setItem('cart',"[]")
localStorage.clear()

/**
 * Example 2 add to cart
 */
let items = [
    {
        name:'item', 
        price:3.50,
        quantity: 2
    },
    {
        name:'item2', 
        price:0.50,
        quantity: 20
    }
]
cartFromStorage=[];

for(let i=0; i<items.length; i++){
    let button = document.createElement('button');
    button.innerText = "Add to cart";
    button.setAttribute('data-id',i);
    document.getElementById('container').appendChild(button);
}
let myButtonContainer = document.getElementById('container');

myButtonContainer.addEventListener('click',(event)=>{
    if(event.target.hasAttribute('data-id')){
        let id = event.target.getAttribute('data-id');
        cartFromStorage.push(items[id]);
        console.log(cartFromStorage);
        localStorage.setItem('cart',JSON.stringify(cartFromStorage));
    }else{
        console.log('Button not clicked')
    }
})

