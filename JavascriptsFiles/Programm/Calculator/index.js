let display = document.querySelector(".display");
// let buttons = document.querySelectorAll(".numbers,.operators");
// const buttons = document.querySelectorAll(".numbers, .operators");
const buttons = document.querySelectorAll(".numbers, .operators");
// let operators = document.querySelectorAll(".operators");
console.log(buttons);
const equalBtn = document.querySelector(".equalto");
let firstNumber = ""
let secondNumber = ""
let operator = "";


for(let i = 0; i < buttons.length; i++){
   buttons[i].addEventListener("click", function(){

    let value = buttons[i].textContent;
    if(value === "+" || value === "-" || value=== "x" || value=== "/"){
        operator = value;
    }
    else{
        if(operator === ""){
            firstNumber += value;
        }
        else{
            secondNumber += value;
        }
    }
    display.textContent = firstNumber + operator + secondNumber;


   })
    
}

equalBtn.addEventListener("click", function () {

    let result;

    if (operator === "+") {
        result = Number(firstNumber) + Number(secondNumber);
    }
    else if (operator === "-") {
        result = Number(firstNumber) - Number(secondNumber);
    }
    else if (operator === "X") {
        result = Number(firstNumber) * Number(secondNumber);
    }
    else if (operator === "/") {
        result = Number(firstNumber) / Number(secondNumber);
    }

    display.textContent = result;

    // prepare for next calculation
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
});