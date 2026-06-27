const textBox = document.getElementById("textBox");
const mtBtn = document.getElementById("myBtn");
const Result = document.getElementById("Result")
const image = document.getElementById("image");
function rollerDice(){
    let values = [];
    let imageValue = [];
    for(let i = 0; i < Number(textBox.value); i++){
        let value =  Math.floor(Math.random() * 6) + 1;
        values.push(value);
        imageValue.push(`<img src="images/${value}.png" alt="images">`);
    }    
    Result.textContent = `Dice Values: [${values.join(", ")}]`;
    image.innerHTML = `${imageValue.join("")}`
    console.log(imageValue);
    
}
mtBtn.onclick = rollerDice;