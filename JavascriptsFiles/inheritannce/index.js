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


class Cars {
    constructor(name, speed){
        this.name = name;
        this.speed = speed;

    }
    move(speed){
        console.log(`This ${this.name} speed of ${speed}km/h`);
        
    }
}


class BMW extends Cars {
    constructor(name, speed, engine){ 
        super(name, speed);
        this.engine = engine;
    }

    run(){
        console.log("It can Runn");;
        super.move(this.engine)
        
    }
   
}

class Lembo extends Cars{
     constructor(name, speed, engine){
        super(name, speed);
        this.engine = engine;
    }
    
}

class Cooper extends Cars{
     constructor(name, speed, engine){
        super(name, speed);
        this.engine = engine;
    }

}

const V2 =  new BMW("V2", 25, 255);
const V3 =  new Lembo("B2", 25, "Inline");

console.log(V2.name);
console.log(V2.speed);
console.log(V2.engine);

V2.run();


// 5:48:00 super Keyword;


