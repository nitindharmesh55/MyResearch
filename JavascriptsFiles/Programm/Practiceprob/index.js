const container = document.getElementById("container")

const books = [
    { title: "Atomic Habits", pages: 320 },
    { title: "Deep Work", pages: 280 },
    { title: "Clean Code", pages: 464 }
];
const pageCounts = books.map(pageOfBooks);
console.log(pageCounts);
function pageOfBooks(element) {
    return element.pages;
}

// Debug:
// This code is supposed to return only the employees whose salary is 50,000 or more, but it has a bug.
const employees = [
    { name: "Ava", salary: 45000 },
    { name: "Liam", salary: 62000 },
    { name: "Noah", salary: 51000 },
    { name: "Emma", salary: 39000 }
];

const highEarners = employees.filter(isHighSalary);

console.log(highEarners);

function isHighSalary(person) {
    return person.salary >= 50000;
}

// Solution: this function has to return something


// Reduce:
const invoices = [
    { id: 101, amount: 1200 },
    { id: 102, amount: 800 },
    { id: 103, amount: 450 },
    { id: 104, amount: 550 }
];

const totalRevenue = invoices.reduce(AmountSum, 0);
console.log(totalRevenue);

function AmountSum(acc, element) {
    return (acc + element.amount);
}


const orders = [
    { customer: "Alex", quantity: 2 },
    { customer: "Mia", quantity: 5 },
    { customer: "Leo", quantity: 3 },
    { customer: "Sara", quantity: 4 }
];

const toalQuantity = orders.reduce(sumQuantity, 0);
console.log(toalQuantity);

function sumQuantity(acc, element) {
    return acc + element.quantity;
}

// Filter:
const travelers = [
    { name: "Nina", age: 16 },
    { name: "Ryan", age: 23 },
    { name: "Olivia", age: 18 },
    { name: "Ethan", age: 15 },
    { name: "Sophia", age: 30 }
];
const adults = travelers.filter(whoisAdult);
console.log(adults);
function whoisAdult(element) {
    return element.age >= 18;
}


// Map:
const devices = [
    { brand: "Apple", model: "iPhone 16" },
    { brand: "Samsung", model: "Galaxy S26" },
    { brand: "Google", model: "Pixel 11" }
];

const deviceNames = devices.map(productNames);
console.log(deviceNames[0]);
function productNames(element) {
    const p = document.createElement("p");
    p.textContent = `${element.brand} - ${element.model}`
    return p;
}

for (let i = 0; i < deviceNames.length; i++) {
    container.append(deviceNames[i]);
}

// ForEach: MoveList DOM;
const movies = [
    "Interstellar",
    "Inception",
    "The Dark Knight",
    "Oppenheimer"
];

const movieList = document.querySelector("#moveList");
movies.forEach(dynamics)
function dynamics(element) {
    const list = document.createElement("li");
    list.textContent = element;
    movieList.append(list)
}


// Product Store (Level: 1);
const products = [
    {
        name: "Wireless Mouse",
        price: 899
    },
    {
        name: "Mechanical Keyboard",
        price: 3499
    },
    {
        name: "Gaming Headset",
        price: 2199
    }
];

const productContainer = document.querySelector("#productContainer");
const newProducts = products.map(dynamicProduct);
function dynamicProduct(element){
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = element.name;
    p.textContent = element.price;
    div.append(h2,p);
    return div;
}
productContainer.append(...newProducts)



// Project 2: Project 2 — User Directory (filter + DOM) ⭐⭐;

const users = [
    { username: "Nitin", active: true },
    { username: "Alex", active: false },
    { username: "Emma", active: true },
    { username: "Ryan", active: false },
    { username: "Sophia", active: true }
];

const userContainer = document.querySelector("#userContainer");
const ActiveUsers = users.filter(ActivePeople);
console.log(ActiveUsers[0]);
console.log("love");

function ActivePeople(element){
 if (element.active) {
    const p = document.createElement("p");
    p.textContent = element.username;
    userContainer.append(p);
 }
 return element.active;
}

// 🛒 Project 3 — Shopping Cart (Level 2)
const cartItems = [
    {
        product: "Laptop",
        price: 65000,
        inStock: true
    },
    {
        product: "Monitor",
        price: 18000,
        inStock: false
    },
    {
        product: "Mouse",
        price: 1200,
        inStock: true
    },
    {
        product: "Keyboard",
        price: 3500,
        inStock: true
    }
];

const cartContainer = document.querySelector("#cartContainer");
const stockItems = cartItems.filter(element => element.inStock)
stockItems.forEach(DisplayItems);
function DisplayItems(element) {
    const div = document.createElement("div");
    div.classList.add("product-card");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = element.product;
    p.textContent = `₹${element.price}`
    div.append(h2, p);
    cartContainer.append(div);
}