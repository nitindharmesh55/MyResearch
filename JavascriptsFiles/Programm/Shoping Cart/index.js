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

const container = document.getElementById("market");


gadgetShelf.forEach(DisplayShopping);

function DisplayShopping(shop) {

    const container1 = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = shop.title;

    const price = document.createElement("p");
    price.textContent = `₹${shop.cost}`

    const removeBtn = document.createElement("button");

    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
        container1.remove();
    })

    container1.append(h2, price, removeBtn);

    container.append(container1);
}





const car = {
    brand: "Toyota",
    model: "Supra",
    year: 2021,

    showDetails() {
        console.log(`Brand:${this.brand}`);
        console.log(`Model:${this.model}`);
        console.log(`Year:${this.year}`);


    }
}

car.showDetails();


// 🟢 Project 1 — Constructor Function

function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.showInfor = function () {
        console.log(`Name:${this.name}`);
        console.log(`Age:${this.age}`);
        console.log(`Course:${this.course}`);

    };
}

const student1 = new Student("Nitin", 23, "BCA");
const student2 = new Student("Rahul", 20, "Bcom");

const student3 = new Student("Priya", 22, "Bsc");

student1.showInfor();
student2.showInfor();
student3.showInfor();


// 🟢 Project 2 – Employee Management System

function Employee(name, department, salary) {
    this.name = name;
    this.department = department;
    this.salary = salary;

    this.showDetails = function () {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: ${this.salary}`);
    };

    this.giveRaise = function (amount) {
        this.salary += amount;
        console.log(`${this.name}: +${amount}`);
    };
}

const emp1 = new Employee("Nitin", "IT", 2000);

emp1.showDetails();
emp1.giveRaise(400);
emp1.showDetails();


// 🟢 Project 3 – Bank Account

function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    };

    this.withdraw = function (amount) {
        if (amount <= this.balance) {
            console.log("Withdraw Successful");
            this.balance -= amount;
        }
        else {
            console.log("Insufficient Balance");
        }
    };


    this.showBalance = function () {
        console.log(`Owner:${this.owner}`);
        console.log(`Balance:₹${this.balance}`);

    }
}

const NitinAccount = new BankAccount("Nitin", 50000);

NitinAccount.deposit(10000);
NitinAccount.withdraw(2000);
NitinAccount.showBalance();



// 🚀 Project 4 – Movie Ticket Booking System

function Movie(movieName, totalSeats) {
    this.movieName = movieName;
    this.totalSeats = totalSeats;

    this.bookTicket = function (Tickets) {
        if (this.totalSeats >= Tickets) {
            console.log(`${Tickets} Ticket(s) booked`);
            this.totalSeats -= Tickets;
        }
        else {
            console.log("Not enogh seats available.");

        }
    };

    this.cancelTickets = function (Tickets) {
        this.totalSeats += Tickets
    }

    this.showMovies = function () {
        console.log(`Movie: ${this.movieName}`);
        console.log(`Available Seats: ${this.totalSeats}`);
    }
}

const Avengers = new Movie("Avengers", 50);

Avengers.bookTicket(10);
Avengers.cancelTickets(2)
Avengers.showMovies()



// 🟢 Project 5 – Online Shopping Cart

function Product(name, price, stocks) {
    this.name = name;
    this.price = price;
    this.stocks = stocks;


    this.buy = function (stock) {
        if (stock > this.stocks) {
            console.log("Out of Stock");
            return;
        }
        this.stocks -= stock;
    }

    this.restock = function(stockIn){
        this.stocks += stockIn;
    }

    this.priceChange = function(price){
        this.price  =  price;
    }

    this.showProduct =  function(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Stocks: ${this.stocks}`);        
    }

}

const laptop  = new Product("Laptop", 55000, 8);

laptop.buy(2);
laptop.priceChange(52000)
laptop.restock(5);
laptop.showProduct();


// 🚀 Project 6 – Car Rental System

function Cars(brand, model, rentPerDay) {
    this.brand = brand;
    this.model = model;
    this.rentPerDay = rentPerDay;
    this.isRented = false;


    this.rentCar = funciton(){
        if(this.isRented)
        {
            console.log("cart is already Rented.");
            
        }
        this.isRented  = true;
        console.log(`${this.brand} ${this.model} rented Sucessfully`);
        
    }
}
