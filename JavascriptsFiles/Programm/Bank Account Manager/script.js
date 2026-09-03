let AccountHolder = document.getElementById("acName");
let Balance = document.getElementById("balance");
let submit = document.getElementById("submit");
let outPut = document.getElementById("output");

// Numbers of Accounts;
let Accounts = [];


// Making Button


submit.addEventListener("click", ()=>{
    // Creating Object
    let account =  new BankAccount(AccountHolder.value, Number(Balance.value));

    let accountContainer = document.createElement("div");
    accountContainer.classList.add("accountContainer")
    let Name  = document.createElement("p");
    let acBalance = document.createElement("p");
    Name.textContent = `Account Holder: ${account.name}`;
    acBalance.textContent = `Balance: $${account.balance}`;
    
    // For Deposits
    let containerForDep = document.createElement("div");
    containerForDep.classList.add("depositWithContainer");
    let depositInput = document.createElement("input");
    depositInput.type = "number";
    depositInput.placeholder = "Enter Deposit Amount"

    let depositButton = document.createElement("Button");
    depositButton.textContent =  "Deposit";
    depositButton.addEventListener("click", ()=>{
        let depositAmount = Number(depositInput.value);
        account.deposit(depositAmount);
        acBalance.textContent = `Balance: $${account.balance}`

    })



    // /Container for the withdraw

    let containerforWith = document.createElement("div");
    containerforWith.classList.add("depositWithContainer");


    let withdrawinput = document.createElement("input");
    withdrawinput.type = "number";
    withdrawinput.placeholder = "Enter Withdraw Amount";

    let withdrawButton =  document.createElement("button");
    withdrawButton.textContent = "Withdraw";

    withdrawButton.addEventListener("click", ()=>{
        let withdrawAmount = Number(withdrawinput.value);
        account.withdraw(withdrawAmount);
        acBalance.textContent = `Balance: $${account.balance}`
    })



    containerForDep.append(depositInput, depositButton);
    containerforWith.append(withdrawinput, withdrawButton);

    Accounts.push(account);
accountContainer.append(Name, acBalance, containerForDep, containerforWith);
    outPut.append(accountContainer);
})

class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount){
        
        this.balance += amount;
    }
    withdraw(amount){
        if(this.balance >= amount)
        {
            this.balance -= amount;
            return true;
        }
        
        return false;
    }
}

