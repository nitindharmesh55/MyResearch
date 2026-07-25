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
