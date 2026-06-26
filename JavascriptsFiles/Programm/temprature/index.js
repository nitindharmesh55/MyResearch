const Fahrenheit = document.getElementById("to-Fahrenheit");
const Celsius = document.getElementById("to-celsius");
const textBox = document.getElementById("textBox");
const result = document.getElementById("result");
const mtBtn = document.getElementById("myBtn");
let temp;
mtBtn.onclick = convert;

function convert(){
    if(Fahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if(Celsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32 ) * (5/9)
        result.textContent = temp.toFixed(1) + "C";

    }
    else{
        result.textContent = "Select a Unit"
    }
}