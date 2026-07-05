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

//Map funciton;
// Accept a callback function and applies that function to each element of an array and it return new arrays;

const numberss = [1, 2, 3, 4, 5];
const squares = numberss.map(square);
console.log(squares);

function square(element){
 return Math.pow(element,2);
}

const cubes = numberss.map(cube);
const lime = cubes.forEach(displayCubes);
console.log(lime);


function displayCubes(element) {
    console.log(element);
}

console.log(cubes);    
function cube(element){
    return Math.pow(element, 3);
}


const students = ["spongebob", "patrics", "squidword"];
const upperCaseStudents = students.map(upperCaseMethod);
console.log(upperCaseStudents);
function upperCaseMethod(element){
    return element.toUpperCase();
}

const names = ["Jack", "Jill", "John"];
const capNames = names.map(capNameFromLie);
console.log(capNames);
function capNameFromLie(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}


// const Dates = ["2023-01-01", "2023-02-15", "2023-03-30"];
// const formatedDates = Dates.map(formateDate);
// console.log(formatedDates);

// function formateDate(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }


// formating Dates

 const dates = [
  "2026-01-15",
  "2026-02-20",
  "2026-03-10",
  "2026-04-05",
  "2026-05-18",
  "2026-06-22",
  "2026-07-30"
];
const formattedDates = dates.map(formateDate);
console.log(formattedDates);

function formateDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}



// Filter(): Create a new aaray by filtering out elements;
const primeNumbers = [5, 12, 8, 21, 3, 17, 9, 30];
const iseachNumber = primeNumbers.forEach(iseach);
console.log(iseachNumber);

const ismapNumber = primeNumbers.map(ismap);
console.log(ismapNumber);

const isfiilterNumber = primeNumbers.filter(isfilter);
console.log(isfiilterNumber);



// Foreach;
function iseach(element){
    return element % 2 === 0;
}

//Map 
function ismap(element) {
    return element % 2 === 0;
}

// Filter;

function isfilter(element){
    return element % 2 === 0;
}

