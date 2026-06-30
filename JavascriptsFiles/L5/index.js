// Javascript Lecture : 5;
// Callbacks;     a function that is passed as an argument to another function;

//  used to handel asynchronous operations
// 1. reading files
// 2. Network request
// 3. Interacting with database;


// hello(goodbye);
// function hello(callback){
//     console.log("hello");
//     callback(name);

// }
// function name(name){
//     console.log(`Hey There: ${name}`);

// }
// function goodbye(name){
//     console.log("Good Bye!");
//     name("nitin")

// }
sum(DisplayDom, 10, 25);

function sum(callback, x, y) {
    let result = x + y;
    callback(result)
}
function displayconsole(result) {
    console.log(result);
}

function DisplayDom(result) {
    document.getElementById("myh1").textContent = result;
}


// FoEach: Method used to iterate over the Elements;
// of an array and apply a specified function to each element;
// we can use modife each element using function;
// forcah provide : element , index,

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(displayElement)
numbers.forEach(double);

function double(element, index, array) {
    let result = array[index] = element * 2;
    console.log(result);

}
function displayElement(element) {
    console.log(element);
}

let fruits = ["apple", "Orange", "banana", "Coconuts"];

fruits.forEach(displayFruits)

fruits.forEach(upperCase);
fruits.forEach(lowerCase);
fruits.forEach(capitalize)

function displayFruits(element) {
    console.log(element.toUpperCase());
}
function upperCase(element, index, array){
   let result = array[index] = element.toUpperCase();
   console.log(result);
}
function lowerCase(element, index, array){
   let result = index[array] = element.toLowerCase();
   console.log(result);
   
}
function capitalize(element, index, array){
    let result = array[index] = element.charAt(0).toUpperCase() + element.slice(1);
    console.log(result);
    
}