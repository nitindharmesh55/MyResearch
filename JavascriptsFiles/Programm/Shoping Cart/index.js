const gadgetShelf = [
    {
        title: "Wireless Mouse",
        cost: 799
    },
    {
        title: "Mechanical Keyboard",
        cost: 2499
    },
    {
        title: "Gaming Headset",
        cost: 1899
    }
];

const container =  document.getElementById("market");


gadgetShelf.forEach(DisplayShopping);

function DisplayShopping(shop){

    const container1 = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = shop.title;

    const price  = document.createElement("p");
    price.textContent = `₹${shop.cost}`

    const removeBtn = document.createElement("button");

    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", ()=>{
        container1.remove();
    })

    container1.append(h2, price, removeBtn);

    container.append(container1);
}





const car  = {
    brand:"Toyota",
    model:"Supra",
    year:2021,

    showDetails(){
        console.log(`Brand:${this.brand}`);
        console.log(`Model:${this.model}`);
        console.log(`Year:${this.year}`);

        
    }
}

car.showDetails();