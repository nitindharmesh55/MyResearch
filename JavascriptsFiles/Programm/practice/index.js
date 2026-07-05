function EvenorOdd(num){
    if(num % 2 === 0){
        console.log("Even");
    }
    else{
        console.log("odd");
        
    }
}

function age(age){
    return age >= 18 ? "Adult":"Minor";
}

function calclator(x , y){
    let add = x + y;
    console.log(`Add: ${add}`);
    let sub = x - y;
    console.log(`sub: ${sub}`);
    let mul = x * y;
    console.log(`mul: ${mul}`);
    let div = x / y;
    console.log(`Div: ${div}`);
}

function large(x , y, z){
    return Math.max(x, y, z);
}

for(let i = 1; i <= 10; i++){
    console.log(`2 X ${i} = ${2 * i}`);
}
let number = 1;
for (let i = 5; i > 0; i--){
    number = number * i; 
    
}
console.log(number);

const fruits = ["Apple","Banana","Mango","Orange"];
fruits.forEach(displayElements);
function displayElements(elments , index){
    console.log(`${index + 1}: ${elments}`)    
}
const numbers = [2, 4, 6, 8];
const three  = numbers.map(multipleof3);
console.log(three);

function multipleof3(element){
    return element * 3;
}


const names = ["nitin", "john", "emma"];
const CaptializeNames = names.map(capitalize);
console.log(CaptializeNames);

function capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}


// Practice for the Map foreach and filter;
const colors = ["Red", "Green", "Blue", "Yellow"];
colors.forEach(displayColor);

function displayColor(element, index) {
  console.log(`${index + 1}: ${element}`);
  
}

const numberss = [10, 15, 20, 25, 30];
numberss.forEach(evenNumber);

function evenNumber(element){
   if(element % 2 == 0){
    console.log(element);
   }  
}


const prices = [100, 250, 80, 500];
const disscountPrice = prices.map(Discount);
console.log(disscountPrice);

function Discount(element){
    let price =  element -  (element * 10 /100);
    return price;
}


const ages = [12, 18, 25, 15, 30, 16, 40];
const isAdult =  ages.filter(adults);
console.log(isAdult);
function adults(element){
    return element >= 18;
}


const NumberS = [5, 10, 15, 20];
const great = NumberS.map(bigSmall);
console.log(great);
function bigSmall(element){
    if(element > 10){
        return `Big:${element}`;
    }
    else{
        return`Small:${element}`
    }
}


const temperatures = [18, 25, 31, 15, 28, 35];
const tempratureofday = temperatures.map(temp30);
console.log(tempratureofday);


function temp30(element){
    if(element >= 30){
        return "31°C - Hot";
    }
    else if( element >= 0){
        return "18°C - Normal"
    }
    else{
        return "Go Home Bro"
    }
}


const scores = [95, 72, 48, 88, 61, 35];
const socresss = scores.map(scoreMat);
console.log(socresss);
function scoreMat(element){
    if(element >= 90){
        return `${element} - A`;
    }
    else if(element >= 75){
        return `${element} - B`;
    }
    else if(element >= 50){
        return `${element} - C`;
    }
    else{
        return `${element} - F`
    }
}


const products = [
  { name: "Laptop", price: 70000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 2500 },
  { name: "Monitor", price: 15000 },
  { name: "USB Cable", price: 500 }
];

const above20 = products.filter(costMore);
console.log(above20);


function costMore(element){
    return element.price >= 2000;
}

const productss = [
  { name: "Laptop", price: 70000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 2500 },
  { name: "Monitor", price: 15000 }
];
const indianPrice = productss.map(displayObejct);
console.log(indianPrice);
function displayObejct(element){
    return `${element.name} costs ₹${element.price}`
}

const students = [
  { name: "Nitin", marks: 95 },
  { name: "John", marks: 68 },
  { name: "Emma", marks: 42 },
  { name: "Alex", marks: 81 },
  { name: "Sara", marks: 55 }
];

const passorFail = students.map(passStudent);
console.log(passorFail);

function passStudent(element){
    if (element.marks >= 50){
        return `${element.name} - Pass`;
    }
    else{
        return `${element.name} - Fail`;
    }
}


const users = [
  { name: "Nitin", age: 22, active: true },
  { name: "John", age: 17, active: true },
  { name: "Emma", age: 25, active: false },
  { name: "Alex", age: 19, active: true },
  { name: "Sara", age: 16, active: false }
];

const userState = users.filter(userActice);
console.log(userState);


function userActice(element){
    return element.age >= 18 && element.active;
}



const employees = [
  { name: "Nitin", salary: 50000 },
  { name: "John", salary: 75000 },
  { name: "Emma", salary: 40000 },
  { name: "Alex", salary: 90000 },
  { name: "Sara", salary: 65000 }
];

const employeesSalry = employees.filter(salary).map(slarypeople);
console.log(employeesSalry);

function slarypeople(element){
    return `${element.name} earns ₹${element.salary}`
}
function salary(element){
    return element.salary >= 60000;
}



const orders = [
  { id: 1, amount: 1200, paid: true },
  { id: 2, amount: 800, paid: false },
  { id: 3, amount: 2500, paid: true },
  { id: 4, amount: 500, paid: true },
  { id: 5, amount: 3000, paid: false }
];
const orderpaid = orders.filter(paidOrder).map(priorityOrder);
console.log(orderpaid);

function priorityOrder(element){
    return `Order #${element.id} - ₹${element.amount}`
}
function paidOrder(element){
    return element.paid === true;
}