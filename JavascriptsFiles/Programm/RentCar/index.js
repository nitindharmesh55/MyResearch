function Car(brand, model, rentperDay)
{
    this.brand =  brand;
    this.model = model;
    this.rentperDay =  rentperDay;
    isRented =  false;

    this.rentCar = function(){
        if(isRented)
        {
            console.log("Car is already rented!");
            return;
        }
        else
        {
            this.isRented = true;
            console.log(`${this.brand} ${this.model} rented successfully.`);
            
        }
    }

    this.returnCar =  function(){
        if(!isRented)
        {
            console.log("This car Wasn't rented!");
            return;
            
        }
        else
        {
           isRented  = false;
           console.log("Car returned successfully");
           
        }
    }


    this.showCar = function(){
        console.log(`Brand:${this.brand}`);
        console.log(`Model:${this.model}`);
        console.log(`Rent Per Day:${this.rentperDay}`);

        console.log(isRented ? "Available: Yes" : "Available: No");
    }

}

const Toyota = new Car("Toyota", "Supra", 5000);
Toyota.rentCar();
Toyota.returnCar();
Toyota.showCar();

const Honda = new Car("Honda", "Civic", 3000);
const BMW = new Car("BMW", "M4", 8000);

// 🟢 Project 7 – Gym Membership System (Classes)


class GymMember{
    constructor(name, membershipType){
        this.name = name;
        this.membershipType = membershipType;
        this.isActive = true;
    }
    showDetails(){
        console.log(`Name:${this.name}`);
        console.log(`MemberShip:${this.membershipType}`);
        let active = this.isActive ? "Active" : "Inactive";
        console.log(`Status:${active}`);
    }

    cancelMembership(){
        if(!this.isActive)
        {
         console.log("Membership is already inactive");
         return;
        }
        else
        {   
            this.isActive = false;
            console.log("Membership cancelled Successfully");
            return;
            
        }
    }


    renewMembership(){
        if(this.isActive)
        {
            console.log("Membership is already active");
            return;
        }
        else{
            this.isActive = true;
            console.log("Membership renwed successfully");

            return;
            
        }
    }
}

const Employee = new GymMember("Nitin","Gold" );
console.log(Employee);

Employee.showDetails();
Employee.cancelMembership();


// 🚀 Next Project (Level Up)



class Book{
    constructor(title, author, pages){
       
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowed = false;
    }

    borrowBook(){
        if(this.isBorrowed)
        {
            console.log(`${this.title} is already borrowed.`);
            return;
        }
        this.isBorrowed = true;

        console.log(`${this.title} borrowed successfully`);
    }

    returnBook(){
        if(!this.isBorrowed)
        {
            console.log("This book Wasn't borrowed.");
            return;
        }
        this.isBorrowed =  false;
        console.log(`${this.title} return sucessfully`);
        
    }


    showBook(){
        let active = this.isBorrowed ? "Borrowed": "Available";

        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
        console.log(`Status: ${active}`);
    }
}

const Atomic = new Book("Atomic Habits", "James", 300);

Atomic.borrowBook();



// 🛒 Project 9 – Shopping Cart System;


class Product{
    constructor(name, price,stock){
        this.name = name;
        this.price = price;
        this.stock =  stock;
    }

    showProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Stock: ${this.stock}`);
        
    }

}

class Shopping_Cart{
    constructor(){
        this.items = [];
    }

    addProduct(product){
        this.items.push(product)
        console.log(`${product.name} added to cart`);
        
    }

    showCart(){
        console.log("----- Shopping Cart-----");

        this.items.forEach((product) =>{
            console.log(`${product.name}`);
            console.log(`₹${product.price}`);
            
            
        })
    }
}


const mouse = new Product("Mouse", 800, 20);
const keyboard = new Product("Keyboard", 2500, 12);

const cart = new Shopping_Cart();

cart.addProduct(mouse);
cart.addProduct(keyboard);

cart.showCart();



// 🎓 Project 10 – Student Management System

class Student{
    constructor(name, age, course){
        this.name = name;
        this.age = age;
        this.course = course;
    }

    showStudent(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
    }
}

class classroom{
    constructor(){
        this.students = [];
    }

    addStudent(student){
        this.students.push(student);
        console.log(`${student.name} added successfully`);
    }

    showStudents(){
        this.students.forEach((classStudent)=>{
            console.log("-----------------");
            classStudent.showStudent();
            
        })
    }
}


const Nitin = new Student("Nitin", 23, "BCA");
const Rahul = new Student("Rahul", 20, "Bcom");
const Priya = new Student("Priya", 22, "Bsc");

const classRoom =  new classroom();


classRoom.addStudent(Nitin);
classRoom.addStudent(Rahul);
classRoom.addStudent(Priya);

classRoom.showStudents();




// 🎮 Project 11 – RPG Battle System

// 🎯 Objective

// Create two game characters that can fight each other.


class Character{
   
    constructor(name, health, attackpower){
        this.name = name;
        this.health = health;
        this.attackpower = attackpower;
        this.isAlive = true;
    }

    showStatus(){
        let alive = this.isAlive ? "Alive" : "Defeated";

        console.log(`Name:${this.name}`);
        console.log(`Health:${this.health}`);
        console.log(`Attack:${this.attackpower}`);
        console.log(`Status:${alive}`);
    }
   
    attack(enemy){
        if(!this.isAlive)
        {
            console.log(`${this.name} cannot attack because they defeated!`);
            return;
            
        }
        if(!enemy.isAlive)
        {
            console.log(`${enemy.isAlive} has been Defeated!`);
            return;
        }

        enemy.health -= this.health;

        console.log(`${this.name} attacked ${enemy.name} for ${this.attackpower} demage!`);


        if(enemy.health <= 0)
        {
            enemy.health = 0;
            enemy.isActive =  false;
            console.log(`${enemy.name} has been defeated!`);
            
        }
        

    }



}

const knight = new Character("Kingsmen", 250, 1500);

const Dragon  = new Character("Dragon", 60, 25);

// knight.attack(Dragon);

Dragon.attack(knight);
Dragon.attack(knight);
Dragon.attack(knight);
Dragon.attack(knight);
Dragon.attack(knight);
Dragon.attack(knight);
Dragon.attack(knight);
Dragon.attack(knight);
