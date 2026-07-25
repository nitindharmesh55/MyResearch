class Movis {
    constructor(title, availableSeats, ticketPrice) {

        this.title = title;
        this.availableSeats = availableSeats;
        this.ticketPrice = ticketPrice;
    }

    bookSeats(quantity) {
        if (quantity > this.availableSeats) {
            console.log("Not Enough seats Availabel.");
            return;
        }
        this.availableSeats -= quantity;
        console.log(`${quantity} seat(s) booked for ${this.title}.`);

    }

    cancelSeats(quantity) {
        this.availableSeats += quantity;
        console.log(`${quantity} seat(s) cancelled`);

    }

    showMovie() {

        console.log(`Title: ${this.title}`);
        console.log(`Available Seats: ${this.availableSeats}`);
        console.log(`Ticket Price: ${this.ticketPrice}`);

        console.log("========================");




    }
}



class Theater{
    constructor()
    {
        this.movies = [];
    }

    addMovies(movie)
    {
        this.movies.push(movie);
        console.log(`${movie.title} added sucesssfully`);
        
    }
    showMovie(){
        this.movies.forEach((movie) =>{
            movie.showMovie();
        })
    }

    bookMovie(title, seats)
    {
        let found = false;

        this.movies.forEach((movie) =>{
            if(movie.title === title)
            {
                movie.bookSeats(seats);
                found = true;
            }
        });

        if(!found)
        {
            console.log("Movie not found");
            
        }
    }

}


// Creaing objects

const avengers = new Movis("Avengers", 50, 12);
const batman = new Movis("Batman", 30, 10);
const interstellar = new Movis("Interstellar", 20, 15);


const movieBooks = new Theater();
movieBooks.addMovies(avengers);
movieBooks.addMovies(batman);
movieBooks.addMovies(interstellar);
movieBooks.showMovie();




// 🐶 Project 13 – Pet Adoption Center


class Pet{
    constructor(name, type, age)
    {
        this.name = name;
        this.type = type;
        this.age = age;
        this.isAdopted =  false;
    }

    adopt(){
        if(this.isAdopted)
        {
            console.log("Buddy is already adopted!");
            return;
        }
        this.isAdopted = true;
        console.log("Buddy has been adopted.");
    }

    showPet(){
        let status =  this.isAdopted ? "Available" : "Adopted";
        console.log(`Name: ${this.name}`);
        console.log(`Type: ${this.type}`);
        console.log(`Name: ${this.age}`);
        console.log(`Status: ${status}`);   
    }
}


class AdoptionCenter{
    constructor(){
        this.Pets = [];
    }
    addPet(pet)
    {
        this.Pets.push(pet);
        console.log(`${pet.name} added successfully`);
        
        

    }
    showPets()
    {
        this.Pets.forEach((pet) =>{
            pet.showPet();
        })
    }

    adopetPet(name)
    {
        let found =  false;
        this.Pets.forEach((pet)=>{
            if(pet.name === name)
            {
                pet.adopt();
                found = true;
            }
        });

        if(!found)
        {
            console.log("Pet not found!!");
            
        }
    }

}


const Buddy =  new Pet("Buddy", "Dog", 2);
const Milo =  new Pet("Milo", "Cat", 1);
const Rocky =  new Pet("Rocky", "Dog", 4);

const petcenter = new AdoptionCenter();


petcenter.addPet(Buddy);
petcenter.addPet(Milo);
petcenter.addPet(Rocky);

petcenter.showPets();
petcenter.addPet(Buddy);

petcenter.adopetPet("Buddy");

