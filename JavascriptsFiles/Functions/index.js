// Funciton declaration = define a reusable block of code that performs a specific task;

// Function Expression =  a way to define funciton as values or variables;

function hello(){
    console.log("Hey Hello");
}

// setTimeout(Callback,time )
setTimeout(hello,3000);

setTimeout(function(){
    console.log("Hello Nitin");
    
},3000)


const numbers = [1,2,3,4,5,6];
const squares =  numbers.map(square)
console.log(squares);


function square(element){
    return Math.pow(element, 2);
}


// Even or odd funciton;

const even =  numbers.filter(function(element){
    return element % 2 === 0;
})
console.log(even);


const odds =  numbers.filter(function(element){
    return element % 3 === 0;
})
console.log(odds);


// arrow Function  = it's way to write function expression;

const hellos = (name)=>{
    console.log(`Hello ${name}`);
}
hellos("Nitisn");


setTimeout(()=>{
    console.log("Hey There Nitin!!");
    
},4000)


const Nummbers = [1,2,3,4,5,6,7,8,9];
// console.log(...Nummbers);

const Mathsquar = Nummbers.map((element)=>{
    return Math.pow(element, 2);
})
const cubes =  Nummbers.map((element) =>{
    return Math.pow(element, 3);
})


const sums = Nummbers.reduce((acc,element)=>{
    return acc + element;
})
console.log(sums);

console.log(Mathsquar);





