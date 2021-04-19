const formElement = document.getElementById('theForm');
document.querySelector("button").addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("button was clicked");
    
const formData = new FormData(formElement);
let firstName = formData.get('firstName');
let age = formData.get('age');
    console.log(firstName, age);
  });
  
  document.querySelector("div").addEventListener("click", function(e) {
    console.log("div was clicked");

  });
  
formElement.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Form submitted");
})

document.getElementById('submit').addEventListener('click',(e)=>{
    //e.preventDefault();
    console.log("Button Clicked to submit")
})