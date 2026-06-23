const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mysubmit");
const result = document.getElementById("result");

let Age;



const message = function () {
    Age = myText.value;
    Age = Number(Age);
    // console.log(Age);

    if (Age >= 100) {
        result.textContent = `You are too old to enter this site`
    }
    else if (Age >= 18) {
        result.textContent = `You are Old enough to Enter`
    }
    else if (Age == 0) {
        result.textContent = `You can't Enter! you just Born`
    }
    else if (Age < 0) {
        result.textContent = `Your age can't be below 0`
    }
    else {
        result.textContent = `You Must be 18+ to enter this site`
    }
}
mySubmit.onclick = message;
