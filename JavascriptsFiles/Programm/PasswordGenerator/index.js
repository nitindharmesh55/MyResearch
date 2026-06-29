const textBox = document.getElementById("length");
const Password = document.getElementById("result");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const Numbers = document.getElementById("numbers");
const Symbols = document.getElementById("symbols");
// input Value
const passwordLength = document.getElementById("length");
// Password input;
const Result = document.getElementById("result")
// Generate Button;
const Generate = document.getElementById("myBtn");

function generatePassword(length,
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSymbols) {

    let password = "";
    let allowrdChars = "";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let NumbersChars = "0123456789";
    let SymbolsChars = "!@#$%^&*()";

    allowrdChars += includeLowerCase ? lowerChars : "";
    allowrdChars += includeUpperCase ? upperChars : "";
    allowrdChars += includeNumbers ? NumbersChars : "";
    allowrdChars += includeSymbols ? SymbolsChars : "";

    if(length <= 0){
        Result.textContent = "Password Must be At least one Chacter";
        return;
    }
    if (allowrdChars.length === 0) {
        Result.textContent = "Password must be include one of the checkbox";
    }

    for(let i = 0;  i  < length; i++){
        const randomIndex = Math.floor(Math.random() * allowrdChars.length);
        password += allowrdChars[randomIndex];
    }

    Result.textContent = password;
}

Generate.onclick = ()=>{ generatePassword(Number(textBox.value), uppercase.checked, lowercase.checked, Numbers.checked, Symbols.checked);}












