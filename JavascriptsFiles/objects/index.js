// Object = " A collection of related properties / methods";
// object =  key:value, funciton();

// Methods are functions that belongs to an object;

const people = {
    firstName:"Nitin",
    lastName:"Dharmesh",
    age:23,
    isEmployed: true,
    sayHello:()=>{console.log("Hey there i am an function");
    }
}
console.log(people.firstName);
console.log(people.lastName);
console.log(people.age);
console.log(people.sayHello());




// This: - reference to the object where This is used
// Ex: person.name => this.name;

const person1 = {
    name:"spngbob",
    favFood:"Banana",
    sayHello :function(){console.log(`Hi i am ${this.name}`);
    }
}

// to use this keyword  we needs to use function expression;
person1.sayHello()




// Construcor: special method for defining the properties and methods of objects;
function Car(make, model, color){
    this.make = make;
    this.model = model;
    this.color = color;
    this.drive =  function(){console.log("Let's drive");
    }
}
const car1 =  new Car("BMW","BX-2100","Red");
const car2  = new Car("Honda", "cb-100", "black");

console.log(car1.make);
console.log(car1.color);
console.log(car1.model);




