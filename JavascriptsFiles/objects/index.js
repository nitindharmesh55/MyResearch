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




// Classes = ES6 features it provide a more structured and clear way to work with object;

function Product(name,price){
    this.name = name;
    this.price  = price;
    this.displayProduct  = function(){
        console.log(`Product: ${this.name}`);
        console.log(`price:${this.price.tofixed(2)}`);
    }
    this.calculateTotal = function(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.5;



// Creatting CLASS;

class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price *  salesTax);
    }

}

const product1 = new Products("shirt", 19.99);
product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(total);



// Static: keyword that define properties or methods that belongs to a class itsel rather than obect created from the class;
// Anything created with static keyword belong the class itself;


class Mathuit{
    static PI = 3.14;
}

console.log(Mathuit.PI);


class User {
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
}
const user1 = new User("SpongeBob");
const user2 = new User("Naruto");
const user3 = new User("Rimaru");

console.log(User.userCount);


// 5:29:00 


