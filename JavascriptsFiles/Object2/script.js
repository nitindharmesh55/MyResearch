// Nested Object: object inside the objectsl
let person = {
    fullname: "spongBb",
    age: 30,
    isStudent: true,
    hobbies:["Karate", "Jellyfishing"],
    address:{
        street:"123 Av ny",
        city:"New York",
        country: "United states"
    }
}

console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);

console.log(person.address);


for(const peroperty in person.address){
    console.log(person.address[peroperty]);
    
}



// Creating Class

class Address{
    constructor(street, city, country)
    {
        this.street =  street;
        this.city =  city;
        this.country =  country;
    }
}


class Person{
    constructor(name, age, ...address){
        this.name =  name;
        this.age = age;
        this.address =  new Address(...address);
    }
}

const person1 =  new Person("SpongBob", 30, "123 Avenuse", "New York", "United States");

console.log(person1);
