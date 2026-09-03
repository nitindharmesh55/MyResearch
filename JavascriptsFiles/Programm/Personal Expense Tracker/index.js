class Expense {
    constructor(amount, category, description) {
        this.amount = amount;
        this.category = category;
        this.description = description;

    }
    display() {
        document.write("Expense Details: ");
        document.write("<br>");
        document.write(this.amount);
        document.write("<br>");
        document.write(this.category);
        document.write("<br>");
        document.write(this.description);
        document.write("<br>");


    }
}

let expense1 = new Expense(100, "Food", "Lunch  at Restaurant");

let expense2 = new Expense(200, "Transport", "Bus fare");
let expense3 = new Expense(4400, "Shopping", "Computer Aceesories");

let expense = [expense1, expense2, expense3];

let TotalExpense = expense1.amount + expense2.amount + expense3.amount;

expense.forEach((items) =>{
  items.display();
})

let amount =  expense.map((expense) => expense.amount);
document.write(amount);


let expensiveExpense = expense.filter((expense) =>{
    return expense.amount > 100;
})

let result = expensiveExpense.map((expense) => {
    return{
        amount: expense.amount,
        category: expense.category,
        description: expense.description
    }
})

console.log(result[0].amount);


