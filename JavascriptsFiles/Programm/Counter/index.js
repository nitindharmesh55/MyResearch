// Counter Programm;
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const countLabel = document.getElementById("count");
let counter = 0;
decreaseBtn.onclick = function () {
    counter -= 1;
    countLabel.textContent = counter
}
resetBtn.onclick = function () {
    counter = 0;
    countLabel.textContent = counter;
}
increaseBtn.onclick = function () {
    counter += 1;
    countLabel.textContent = counter;
}