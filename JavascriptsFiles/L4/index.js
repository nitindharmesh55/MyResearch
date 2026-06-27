// Spread operator =  "Allow an interable such as array or string to be expand into seprate elements";

// let numbers = [1, 2 , 3, 4 , 5];
// let maximum = Math.max(...numbers);
// console.log(maximum);


// let username = "Nitin Prime";
// let letters = [...username];
// console.log(letters[5].replace("@"))

// let fruits = ["Apple", "Orange", "bananan"];
// let vgies = ["Carrot", "Patato"]
// let newFruits = [...fruits, ... vgies, "Eggs", "Milk"];
// console.log(newFruits);



// Reset Parameters : allows a function to work with a variable nummber of argumnet by bundling them into an array;
function openfi(...foods){
    console.log(...foods);
}
const food1 = "pizza"
const food2 = "pie"
const food3 = "shusi"
const food4 = "milk"

console.log(openfi(food1, food2, food3, food4, "Caroort"));

function getFood(...foods){
    return foods;
}
const foods   = getFood(food1, food2, food3, food4);
console.log(foods);

// let dry = []
// function getdry(...food){
// }
// getFood(food1, food2, food3, food4);
// console.log(dry);


function sum(...numbers){
  let result = 0;
  for(let number of numbers){
    result += number
  }
  return result;
}

const total = sum(1, 2, 4, 5, 6);
console.log(`Your Total is: ${total}`);

// Calculat Varage;

function avarage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const Avrage = avarage(10,20,40,50,60,80,90);
console.log(`Your Avarage is : ${Avrage}`);



// Combinig strings;

function combineStrings(...names){
    let fullName = "";
    for(let name of names){
        fullName += name + " ";
    }
    return fullName.replace("mr", "mr:");
}

const fullName = combineStrings("mr","spongbob","Squarpants");
console.log(fullName);



