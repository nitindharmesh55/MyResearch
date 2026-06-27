// While Loop: Repeat some code While some condition is true;
// let username = "";
// while (username === ""){
//     username = window.prompt("UserName:");
// }
// console.log(username);

// 2:30: do Wwhile Loop;

// let loggedin = false;
// let usernname;
// let password;

// while (!loggedin) {
//     usernname = window.prompt("Enter your username")
//     password = window.prompt("Enter your password") 
    
//     if (usernname === "myUsername" && password=== "myPassword") {
//         loggedin = true;
//         console.log("You are logged in!");
//     }
//     else{
//         console.log("Invalid Credential Please try again!");
//     }
// }

// For Loops: repeat some code a LIMITED amount of time;

for(let i = 2; i <= 10; i+= 2){
    console.log(i);   
}



// Function:::  A section of reusable coe.
//  Declare code onece use it whenever you want;
// call the function to excute the code;


// function happybirthday(username, age){
//     console.log(`Happybirthday to you ${username}`);
//     console.log(`You are ${age} old Today`);
    
// }

// happybirthday("Nitin", 21);


function addTwo(x, y){
    let  result = x + y;
    return result;
}

function subtract(x , y){
    return x- y;
}
// let answer = subtract(5,10)
// console.log(answer);


// function isEven(number){
//     return number % 2 === 0 ? true : false;
// }
// let answer =  isEven(14)
// console.log((answer));


function isvalid(email){
    return email.includes("@") ? true : false;
}
let answer = isvalid("purabiyaneetin@gmail.com")
console.log((answer));



// Variable Scope: = Where a variable is recognized
// And accessible (local vs global)




// Arrays: Variable like structure that hold more than 1 value;

 
let fruits = ["apple", "Bananan", "Orange"];
console.log(fruits[0]);// apple;
console.log(fruits[1]);// Bananana
console.log(fruits[2]);//"Orange"

// Changeing array;
fruits[0] = "Coconuts";

fruits.push("Peach")// adding the element at the last of fruits array;

// fruits.pop()// will remove the last element of fruits


// Adding at the begining;

fruits.unshift("Mango");
fruits.shift()// remove the element from the beginig;


// To find the length of the fruits;
fruits.length;


// To find index of the element;
let index = fruits.indexOf("apple");



for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


// Advance loops;
for(let fruit of fruits){
    console.log(fruit);
    
}

// Sort method;
fruits.sort();

// Reverse Method;
fruits.sort().reverse();

