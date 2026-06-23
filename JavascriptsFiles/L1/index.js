// Vairable: container that store value;
// let x ; //declare
// let y;
// x =  100;
// console.log(x)

// let age = 25;
let price = 10.99
let gpa = 2.1;
// console.log(`you are ${age} old`);
console.log(`The Price is $${price}`);
console.log(`You're GPA is ${gpa}`);


// console.log(typeof age);


// String : a series of character;

let firstName = "Bro-Code";
let favorite_food = "pizza";
let email = "nitin@google.com"
console.log(typeof firstName);
console.log(`Your Name is ${firstName}`);
console.log(`You like ${favorite_food}`);
console.log(`your emial is ${email}`);



// Boolean: Either True or False used as flag in the programme

let online = true;
console.log(typeof online);
console.log(`Nitin is online: ${online}`);

let forSale = true;
console.log(`is this car for Sale ${forSale}`);



// let isStudent = true;
// console.log(`Enrolled: ${isStudent}`);


// showing evrything on the web page;
let fullName = "Nitin Rajdharmesh";
let age = 23;
let isStudent = false;
document.getElementById("p1").textContent = `Your Name is ${fullName}`;
document.getElementById("p2").textContent = `Your are ${age} old`;
document.getElementById("p3").textContent = `Entrolled: ${isStudent}`


// Arithimatics;
// Operand - (value variables, etx)
// oprator = (+ ,* ,/ ,-);

let student = 30;
// student =  student + 1;
// student = student - 1;
// student = student * 2;
// student = student / 2;
// student = student ** 2;
// let extrastuent = student % 2; //split class into 2

// Agumented assignment operator;

// student += 1;
// student -= 1;
// student *= 2;
// student /= 2;
// student **= 2;
// student %= 2;


student++; // increment by 1
student--;// decreament by 1;


// Operator Precedens;
let result = 1 + 2 * 3 + 4 ** 2;

// 1. Parentesis ()
// 2. Exponents
// 3. Multiplication & division & modulo
// 4. Addiiton & subtraction;

console.log(result)


console.log(student);


// How to Accept user input
// 1.: Easy Way : window prompt;
// 2. Professional Way: Html textbox;

// let userName;
// window.prompt("What's your user name");
// document.getElementById("p1").textContent = `Your User Name is : ${userName}`;


// let UserName;

let rim = function () {
    UserName = document.getElementById("myText").value;
    document.getElementById("sir").textContent = UserName;
}
document.getElementById("mysubmit").onclick = rim;


// Type conversioin: Change the datatype of a value to another
// (string Number, boolean)


// let Age = window.prompt("How Old are you bruh:")
// Age = Number(Age);
// Age += 1;
// console.log(Age)


let x = "pizza";
let y = "Pizza";
let z = "Pizza";

// x = Number(x) // => NAN 
// y = string(y) // => String
// z = Boolean(z) // => True;

// let x = "0"
// x = Number(x) => NAN




// Const = a varibale can't be change;


// let radius;
// let circumframes;
// radius = window.prompt("Enter The radius of Circle");
// radius =  Number(radius);
// circumframes  = 2 * PI * radius;
// console.log(circumframes);

const PI =  3.14;
let Radius;


let Circumfrance =  function (){
    Radius = document.getElementById("rad").value;
    Radius = Number(Radius);
    let circumfrance = 2 * PI * Radius;
    document.getElementById("red").textContent = Radius;
    document.getElementById("france").textContent = `Circumfrance: ${circumfrance}`
}
document.getElementById("sub").onclick =  Circumfrance;




// Math:
// Built in object that provide a collection of properties and methods;
console.log(Math.PI);

let xx = 3.21;
let yy = 2;
let zz;
// zz = Math.round(xx);
// zz = Math.floor(xx);// round down;
// zz = Math.ceil(xx); // round up;
// zz = Math.trunc(xx);// truncation
// zz = Math.pow(xx , 2);// power
// zz = Math.sqrt(xx); //squreroot;
// zz = Math.log(xx);//logrithim;
// zz = Math.sin(xx);//sin function
// zz = Math.cos(xx);// cos function 
// zz = Math.tan(xx)// tan
// zz = Math.abs(xx)// abosulte value


// 1:05:57 from bro code


// let randomnum = Math.random(); // generate 0 - 1;

let randomnum = Math.floor(Math.random() * 6) + 1; // 1 is here minimum number;
console.log(randomnum);

const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random()* (max- min)) + min;
console.log(randomNum);



// If Statement: if a condition is true excute some code;
                    //  if not do somehitng else



let UserAge =  25;

if(UserAge >= 18){
    console.log("You are old enough to enter this bar");

}
else{
    console.log("Just Go Home")
}


let time =  9;
if(time < 12){
    console.log("Good Morning");
    
}
else{
    console.log("Good Afternoon")
}


let ISStudent =  false;
if(ISStudent){
    console.log("You are a student")
}
else{
    console.log("you are not student");
    
}


let userAGE =   25;
let haslicense = false;

if(userAGE >= 16){
    console.log("You are old enough to drive");
}
else{
   console.log("You must be 16+ to have a license");
}


let numm = 18;
if(numm >= 100){
    console.log("You are to old to enter");
    
}
else if(numm >= 18){
    console.log("You are old enough to enter this site")
}
else if(numm < 0){
    console.log("You're age Can't be below 0")
}

else{
    console.log("You are must be 18+ use this site")
}



// Ternary Operator : 1:42:11