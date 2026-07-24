// Inherritance: allows a new class to inherit properties and methods from the existing class;
// (parent to child)


class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`);
        return;
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

}

class Rabbit extends Animal{
    name = "Rabbit";
}

class Fish extends Animal{
    name = "Fish";
}
class hawk extends Animal{
    name = "Hawk";
}


const rabbit = new Rabbit();
const fish = new Fish();
const Hawk = new hawk();



rabbit.eat();





// Super: keyword is used in classes to call the constructor or acess the properties and methods of a parent(Superclasses);

// this =  this Object;
// super the parent


class School{
    constructor(name){
        this.name = name;

    }

}

class staff extends School{
   
    constructor(name, role){
         super(name);
        
        this.role = role;

    }

}

class students extends School{
 constructor(name, subject){
    super(name);
       
        this.role = subject;

    }
}


const stff = new staff("Ritki", "Professor");

const student = new students("Nitin", "Mathematics");



// 5.:46