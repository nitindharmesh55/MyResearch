const myButton = document.getElementById("myButton")
const myLabel = document.getElementById("MyLabel");
const min = 1;
const max = 6;

const roll = function(){
    const randomNumber = Math.floor(Math.random()* (max - min + 1)) + min;
    myLabel.textContent = randomNumber;
}
myButton.onclick =  roll;