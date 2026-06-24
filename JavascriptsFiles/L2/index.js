// // String Method: Allows you to manipulate and work with text;

// const { useReducer } = require("react");

// let userName = "NitinBrocode";

// userName.charAt(0) // get character based on the index;
// userName.indexOf("N") // return the index of first occuranse of character;
// userName.lastIndexOf("N") // return the last index of the character;

// userName.length// return the length of string;
// userName.trim() // to remove the whitespace;


// userName.toUpperCase() // uppercase;
// userName.toLowerCase() // lowercase;
// userName.repeat(3)// repeat the string for number of time;
// userName.startsWith("N")// return boolean if the string start with This Letter;


// // Examples:

// let result = userName.startsWith("N");

// if(result){
//     console.log(`Your userName is : ${userName}`);
    
// }
// else{
//     console.log("This is not Valid userName");
    
// }


// // userName.endsWith(" ") // ends with;


// // let phonenumber =  "777-780-800-25";
// // phonenumber = phonenumber.replaceAll("-","/");
// // console.log(phonenumber);

// // PadStart(15, "0"); for adding 0 with making 15 digit number;
// // PadEnd from last;



// // String Sliceing = creating a substrirng from a portion of another string
// // string.slice(start , end)

// // const FullName = "Nitin CodePrime"
// // let firstName = FullName.slice(0,5);
// // console.log((firstName));
// // let lastName = FullName.slice(6, FullName.length);
// // console.log(lastName);

// // let firstName = FullName.slice(0, FullName.indexOf(" "));
// // console.log((firstName));
// // let lastName = FullName.slice(FullName.indexOf(" ")+1);
// // console.log(lastName);


// // const emmail = "NitinDharmesh@gmail.com";
// // let usename = emmail.slice(0, emmail.indexOf("@"))
// // let extention = emmail.slice(emmail.indexOf("@"))
// // console.log(usename);
// // console.log(extention);



// // Method Chaining : calling one method after another

// No method chaining;
let Name = window.prompt("Enter userName");
Name = Name.trim();
let letter = Name.charAt(0);
letter =  letter.toUpperCase();
let extracharacter = Name.slice(1);
extracharacter = extracharacter.toLowerCase();

userNName =  letter + extracharacter;
// console.log(Name);



// Chaining Method;

Name = Name.trim().charAt(0).toUpperCase() + Name.trim().slice(1).toLowerCase();
console.log(Name);


// Logical operators =  used to combine and manipulate boolean value;

const temp  = 20;
if(temp > 0 && temp <= 30){
    console.log("The Weather is Good!");
}
else{
    console.log("Weather is Bad!");
}

//Time : 2:18:21




// Strict Equality operator:
// = Assignment operator
// == Comparision operator (compare if values are equal)
// === Strict Equality operator (compare if value & Data type are equal)
// != inequality Operator
// !== Strict ineuality operator

const PI = 3.14;
if(PI == "3.14"){
    console.log("PI");
    
}
else{
    console.log("not Equal"); 
}

if (PI === "3.14") {
    console.log("Pi");
    
}
else{
    console.log("Not Pi");
    
}

if(PI !== "3.14"){
    console.log("IT is PI");
}
else{
    console.log("Not a PI");

}