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




// 🟢 Project 2: Student Grade Manager


class Students {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    average(){
        let Average =  this.marks.reduce((acc, curr)=> acc + curr, 0) / this.marks.length;
        document.write("<br>");
        document.write(`${this.name}: Average Marks: ${Average.toFixed(3)}`);
        return Average;
    }
    grade(){
        let Grade = this.average();
        if(Grade >= 90){
            document.write("<br/>");
            document.write(`${this.name}: Grade: A`);
        }
        else if(Grade >= 80){
            document.write("<br/>");
            document.write(`${this.name}: Grade: B`);
        }
          else if(Grade >= 70){
            document.write("<br/>");
            document.write(`${this.name}: Grade: C`);
        }
          else if(Grade >= 60){
            document.write("<br/>");
            document.write(`${this.name}: Grade: D`);
        }
        else{
            document.write("<br/>");
            document.write(`${this.name}: Grade: F`);
        }
    }
}
let  student1 = new Students("Nitin", 20, [90,80,95]);
student1.average();
student1.grade();


// 🟢 Project 3: Simple Bank Account

class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    deposit(amount){
      let deposit =  this.balance += amount;
      return deposit;
    }
    withdraw(amount){
        let withdraw;
        if(this.balance >=  amount)
        {
            withdraw = this.balance -= amount;
        }
        else{
            document.write("Insufficient Balance");
        }
        return withdraw;
    }
    display(){
        document.write("<br>")
        document.write(`Account Holder: ${this.name}`);
        document.write("<br>")
        document.write(`Balance:  ${this.balance}` );
    }
}

let account1 = new BankAccount("Nitin", 5000);
let account2 = new BankAccount("Mike", 2000);
let account3 = new BankAccount("Rimaru", 5000);
let accounts = [account1, account2, account3];
accounts.forEach((account) =>{
    // What method does an account;
    account.display();
})

let accountName = accounts.map((account) =>{
    return account.name;
})
console.log(accountName);

let richAccounts =  accounts.filter((account) =>{
    return  account.balance >= 4000;
})
console.log(richAccounts);


let richResult = richAccounts.map((account) =>{
    return account.name;
})
console.log(richResult);





account1.deposit(1000);
document.write("<br>")
document.write(account1.balance);

account1.display();
account2.display();
account3.display();


class SavingAccount extends BankAccount {
    constructor(name, balance, interestRate) {
        super(name, balance);
        this.interestRate = interestRate;
    }
    addInterest(){
        let interest = this.balance * ( this.interestRate / 100);

        this.balance += interest;

        return interest;
    }
}
let savings1 = new SavingAccount("Nitin", 5000, 5);
savings1.deposit(10000);
savings1.addInterest();
savings1.withdraw(750);
savings1.display();
