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
function dynamicProduct(element) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = element.name;
    p.textContent = element.price;
    div.append(h2, p);
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

function ActivePeople(element) {
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


// 🏆 Project 4 — Admin Dashboard (Level 3)
const employeess = [
    {
        name: "Ava",
        department: "Engineering",
        salary: 95000
    },
    {
        name: "Noah",
        department: "Marketing",
        salary: 42000
    },
    {
        name: "Liam",
        department: "Engineering",
        salary: 88000
    },
    {
        name: "Emma",
        department: "HR",
        salary: 52000
    },
    {
        name: "Sophia",
        department: "Engineering",
        salary: 105000
    }
];

const employeeContainer = document.querySelector("#employeeContainer");
const employeeEarn = employeess.filter(element => element.department === "Engineering" && element.salary >= 90000);
employeeEarn.forEach(Dashboard);
function Dashboard(element){
    const div = document.createElement("div");
    div.classList.add("employee-card");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const span =  document.createElement("span");
    h2.textContent = element.name;
    p.textContent = element.department;
    span.textContent =  `₹${element.salary}`;
    div.append(h2,p,span);
    employeeContainer.append(div);
}


// 🛒 Project 5 — E-Commerce Store (Level 4)
const productss = [
    {
        name: "Laptop",
        price: 65000,
        rating: 4.8,
        inStock: true
    },
    {
        name: "Mouse",
        price: 1200,
        rating: 4.2,
        inStock: true
    },
    {
        name: "Keyboard",
        price: 3500,
        rating: 3.8,
        inStock: true
    },
    {
        name: "Monitor",
        price: 18000,
        rating: 4.7,
        inStock: false
    },
    {
        name: "Headphones",
        price: 4200,
        rating: 4.9,
        inStock: true
    }
];

const storeContainer = document.querySelector("#storeContainer");
const instokes = productss.filter(element => element.inStock && element.rating >= 4.5 );
instokes.forEach(getProducts);
function getProducts(elemetns) {
    const div = document.createElement("div");
    div.classList.add("product-card");
    const h2 = document.createElement("h2");
    h2.textContent = elemetns.name;
    const p = document.createElement("p");
    p.textContent = `₹${elemetns.price}`
    const span = document.createElement("span");
    span.textContent = `⭐ ${elemetns.rating}`
    const h3 =  document.createElement("h3");
    h3.textContent = `Total Products Displayed: ${instokes.length}`
    div.append(h2, p, span , h3);
    storeContainer.append(div)
}



// 🔥 Project 6 — Admin Panel (Level 5)
const students = [
    { name: "Nitin", marks: 95, passed: true },
    { name: "Alex", marks: 42, passed: false },
    { name: "Emma", marks: 88, passed: true },
    { name: "Ryan", marks: 61, passed: true },
    { name: "Sophia", marks: 35, passed: false }
];

const studentContainer = document.querySelector("#studentContainer");

students.forEach(DisplayStudents);
function DisplayStudents(element){
    const passStudent = document.createElement("div")
    passStudent.classList.add("student", "pass");
    const FailStudent = document.createElement("div")
    FailStudent.classList.add("student", "fail");
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const span = document.createElement("span");

    if(element.passed){
        h2.textContent = element.name;
        p.textContent = `Marks: ${element.marks}`;
        span.textContent = "PASS";
        passStudent.append(h2, p, span);
        studentContainer.append(passStudent)
    }
    if (!element.passed) {
        h2.textContent = element.name;
        p.textContent = `Marks: ${element.marks}`;
        span.textContent = "FAIL"
        FailStudent.append(h2,p,span);
        studentContainer.append(FailStudent);
    }
}



// function DisplayStudents(element) {
//     const student = document.createElement("div");

//     student.classList.add(
//         "student",
//         element.passed ? "pass" : "fail"
//     );

//     const h2 = document.createElement("h2");
//     const p = document.createElement("p");
//     const span = document.createElement("span");

//     h2.textContent = element.name;
//     p.textContent = `Marks: ${element.marks}`;
//     span.textContent = element.passed ? "PASS" : "FAIL";

//     student.append(h2, p, span);
//     studentContainer.append(student);
// }





// 🔥 Project 7 — Employee Directory
const employeesss = [
    { name: "John", department: "IT", salary: 65000 },
    { name: "Emma", department: "HR", salary: 50000 },
    { name: "Alex", department: "Finance", salary: 72000 },
    { name: "Sophia", department: "Marketing", salary: 55000 }
];

const employeeContainerr = document.getElementById("employeeContainerr");

employeesss.forEach(DisplayEmployees);
function DisplayEmployees(element){
    const div = document.createElement("div");
    div.classList.add("employee");
    const h2 = document.createElement("h2");
    h2.textContent = element.name;

    const p = document.createElement("p");
    p.textContent =  `Department: ${element.department}`;

    const span = document.createElement("span");
    span.textContent = `₹${element.salary}`

    div.append(h2,p,span);
    
    employeeContainerr.append(div);
}


// 🔥 Project 8 — Product Cards;
// 🔥 Project 8 — Tech Store Showcase
const gadgetVault = [
    { title: "MacBook Air", cost: 99999, available: true },
    { title: "AirPods Pro", cost: 24999, available: false },
    { title: "iPad Mini", cost: 54999, available: true },
    { title: "Apple Watch", cost: 45999, available: false }
];

const showroom =  document.getElementById("showroom");
gadgetVault.forEach(DisplayGadget);
function DisplayGadget(element){
    const div = document.createElement("div");
    div.classList.add("item",element.available ?"available":"unvailable");
    const h2 = document.createElement("h2");
    h2.textContent = element.title;
    const p = document.createElement("p");
    p.textContent = `₹${element.cost}`;
    
    const span = document.createElement("span");
    span.textContent = element.available ? "Available" :"Unavailable";

    div.append(h2,p,span);
    showroom.append(div);

}