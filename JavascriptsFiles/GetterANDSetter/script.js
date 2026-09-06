// Getter -  A special methods that make property readable;

// Setters- special method that make property writable;

// Validate and modify the value when reading/writing a property;



class Reactangle {
    constructor(width, height) {
        this.width = width;
        this.height =  height;
    }
    // Setters;

   set width(newWidth){
    if(newWidth > 0)
    {
        this._width = newWidth;
    }
    else{
        console.error("Invalid Width");
        
        
    }
   }

   set height(newHeight){
    if(newHeight > 0)
    {
        this._height =  newHeight;
    }
    else
    {
        console.error("Height Must be postive number");
        
    }
   }

//    Getters:

get width(){
    return this._width.toFixed(1);
}
get height(){
    return this._height.toFixed(1);
}

get area(){
    return (this._width * this._height).toFixed(1);
}

}

const rectangle = new Reactangle( 10 , 25);
console.log(rectangle.area);


class Person {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName == "string" && newFirstName.length > 0)
        {
            this._firstName = newFirstName;
        }
        else
        {
            console.error("First Name must be a non Empty String");
            
        }
    }

    set LastName(newLastName){
        if(typeof newLastName == "string" && newLastName.length > 0)
        {
            this._LastName = newLastName;
        }
        else{
            console.error("Last Name must be a non Empty string");
            
        }
    }

    set age(newAge){
        if(typeof newAge == "number" && newAge >= 0)
        {
            this._age = newAge;
        }
        else
        {
            console.error("Age Must be non negative Number:");
            
        }
    }
    // Getters;

    get firstName(){
        return this._firstName;
    }
    get LastName(){
        return this._LastName;
    }
    get age(){
        return this._age;
    }



}

const person = new Person("SpongBob", "SquarPants", 30);
console.log(person.firstName);
console.log(person.LastName);
console.log(person.age);




