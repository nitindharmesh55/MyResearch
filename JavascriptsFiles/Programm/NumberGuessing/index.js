const minNumber = 1;
const maxNumber = 100;
const answewr = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt("Enter Your Guess Between 1-100:");
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Enter Valid Number")
    }
    else if (guess < 0 || guess > 100){
        window.alert("Enter Number betwen 1-100");
    }
    else{
        attempts++;
        if (guess < answewr) {
            window.alert("To Low Try Again")
        }
        else if (guess > answewr) {
            window.alert("TO High Try Again")
        }
        else{
            window.alert("Correct 7 milino:hehe");
            running = false;
        }
    }
}