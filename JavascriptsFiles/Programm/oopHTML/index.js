const petCenter = document.getElementById("petCenter");

const container = document.createElement("div");
container.classList.add("container");
petCenter.append(container);


const heading = document.createElement("h1");
heading.textContent = "Pet Adoption Center";
container.append(heading);


const petName = document.createElement("input");
petName.type = "text";
petName.placeholder = "Enter Pet Name";


const petType = document.createElement("input");
petType.type = "text";
petType.placeholder = "Enter Pet Type";


const petAge =  document.createElement("input");
petAge.type = "number";
petAge.placeholder =  "Enter Pet Age"


const addPet =  document.createElement("button");
addPet.textContent  = "Add Pet";

const petList = document.createElement("div");
petList.classList.add("pet-list");

container.append(petName, petType, petAge, addPet, petList);




class Pet{
    constructor(name, type, age)
    {
        this.name = name;
        this.type = type;
        this.age = age;
        this.isAdopted =  false;
    }

}

class AdoptionCenter{
    constructor(){
        this.pets = [];
    }

    addPet(pet)
    {
        this.pets.push(pet);
    }

}

const petCenterApp  = new AdoptionCenter();

addPet.addEventListener("click", ()=>{

   const name =  petName.value;
   const type =  petType.value;
   const age =  petAge.value;

   const pet  =  new Pet(name, type,age);
   petCenterApp.addPet(pet);
   console.log(petCenterApp.pets);

   const card = document.createElement("div");
   card.classList.add("card");

   const PETNAME = document.createElement("h2");
   PETNAME.textContent = pet.name;
   const PETTYPE = document.createElement("p");
   PETTYPE.textContent = `Type:${pet.type}`;

   const PETAGE = document.createElement("p");
   PETAGE.textContent = `Age: ${pet.age}`;


   let adoptStatus =  pet.isAdopted ? "Adopted" : "Available";

   const STATUS =  document.createElement("p");
   STATUS.textContent = `Status: ${adoptStatus}`;

   const ADOPT =  document.createElement("button");
   ADOPT.textContent = "Adopt";

   ADOPT.addEventListener("click", ()=>{
    pet.isAdopted =  true;
    
    adoptStatus = pet.isAdopted ? "Adopted" : "Available";

    STATUS.textContent = `Status: ${adoptStatus}`;
    ADOPT.disabled = true;
    
   
   })
  card.append(PETNAME, PETTYPE, PETAGE, STATUS, ADOPT);
   petList.append(card);

   
})



// movieAPPls

const movieApp = document.getElementById("movieApp");

const movieContainer =  document.createElement("div");

movieContainer.classList.add("movieContainer");

movieApp.append(movieContainer);

const title =  document.createElement("h1");
title.textContent = "Movie Collection Manager";

const movieName = document.createElement("input");

movieName.type =  "text";
movieName.placeholder =  "Enter Movie Name";
const movieRating =  document.createElement("input");

movieRating.type = "number";
movieRating.placeholder = "Enter Rating(1 - 10)";

const select = document.createElement("select");

const genres = ["Action", "Comedy", "Horror", "Drama"];

genres.forEach((genre) =>{
    const option  = document.createElement("option");

    option.textContent =  genre;
    option.value = genre;

    select.append(option);
})

const addMovie =  document.createElement("button");

addMovie.textContent  = "Add Movie";


const movieList =  document.createElement("div");

movieList.classList.add("movie-list");
movieContainer.append(title, movieName, movieRating, select, addMovie, movieList);


class Movie {
    constructor(name, rating, genre) {
        this.name =  name;
        this.rating  = rating;
        this.genre  = genre;
    }
}

class MovieCollection{
    constructor(){
        this.movies = [];
    }

    addMovie(movie)
    {
        this.movies.push(movie);
    }
}

const MovieCollectionprime =  new MovieCollection();


 addMovie.addEventListener("click", ()=>{

    const name =  movieName.value;
    const rating =  movieRating.value;
    const genre =  select.value;

    const movie = new Movie(name, rating, genre);

    MovieCollectionprime.addMovie(movie);
    const card = document.createElement("div");
    card.classList.add("card");

    const h2 =  document.createElement("h2");
    h2.textContent  = movie.name;

    const ratingP =  document.createElement("p");

    ratingP.textContent =  `Rating: ${movie.rating}`;

    const Genre  = document.createElement("p");

    Genre.textContent  = `Genre: ${movie.genre}`;
   
    const deleteBtn =  document.createElement("button");
    deleteBtn.textContent = "Delete";

  
    
    card.append(h2, ratingP, Genre, deleteBtn);
      deleteBtn.addEventListener("click", ()=>{
        card.remove();
    })

    movieList.append(card);

    


 })