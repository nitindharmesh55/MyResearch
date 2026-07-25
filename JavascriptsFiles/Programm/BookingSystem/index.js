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