// Destructuring: ==  EXtract values from arrays and objects 
//  Then assing them into variable in convenient way;
// [] for array destrucring;
// {} to perform object destrucring;

// ------------------Example 1---------'
// Swap the value of two variable;
let a = 10;
let b = 20;

[a , b] =  [b, a];

console.log(`A:${a} || B:${b}`);


// Colors 
const color = ["Red", "black", "green", "pink","lime"];
[color[0], color[4]] = [color[4], color[0]];


// Adding color values ;
const [firstColor, secondColor, thirdColor, ...extraColor] = color;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


// EXtract Vlaue from Objects;

const person1  = {
    firstName: "SpongBob",
    lastName: "SquarPants",
    age:21
}
const person2  = {
    firstName: "Patrick",
    lastName: "Star",
    age:22
}


const {firstName, lastName, age} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);



// Function Destructuring
function Display({firstName, lastName, age}) {
    console.log(`Name:${firstName} ${lastName}, he is ${age} old `);
}




Display(person1);