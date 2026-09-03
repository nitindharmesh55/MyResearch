// Inheritance: Allow a new class to inherit properties and mathod from an existing class;


class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
        
    }
    sleep(){
        console.log(`This ${this.name} is sleep`);
        
    }
}


class Rabbit extends Animal {
 name = "Rabbit";

 run(){
    console.log(`This ${this.name} can Run`);
    
 }
}

class fish extends Animal {
    name = "Fish";

    swim(){
        console.log(`This ${this.name} is swiming`);
        
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
        
    }
}


const rabbit = new Rabbit();
const Fish = new fish();
const hawk = new Hawk();

rabbit.eat();
rabbit.alive;
rabbit.sleep();

rabbit.run();
Fish.swim();
hawk.fly();



// Super Keywords: used in classes to call the constructor or access the properties and methods of parent;
// This - this object;
// Super - this parent;




