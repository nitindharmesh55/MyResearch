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

    let depositStatus = document.createElement("p");
    let depositInput = document.createElement("input");
    depositInput.type = "number";
    depositInput.placeholder = "Enter Deposit Amount"

    let depositButton = document.createElement("Button");
    depositButton.textContent =  "Deposit";

    depositButton.addEventListener("click", ()=>{
        let depositAmount = Number(depositInput.value);
        if(account.deposit(depositAmount))
        {
            depositStatus.textContent = "Successfuly Added";
            depositStatus.style.color = "green"

            setTimeout(() => {
               
                depositStatus.textContent = " ";
            }, 2000);
        }
        else
        {
            depositStatus.textContent =  "Deposit Must be Above $0"
            depositStatus.style.color =  "red";

            setTimeout(() => {
                 depositStatus.textContent = " ";
            }, 2000);
        }
        acBalance.textContent = `Balance: $${account.balance}`

        depositInput.value =  " ";

    })

   depositButton.addEventListener("keydown", ()=>{
    if(Event.key == "Enter")
    {
        submit.click();
    }
})



    // /Container for the withdraw

    let containerforWith = document.createElement("div");
    containerforWith.classList.add("depositWithContainer");
    let Withdrawstatus = document.createElement("p");


    let withdrawinput = document.createElement("input");
    withdrawinput.type = "number";
    withdrawinput.placeholder = "Enter Withdraw Amount";

    let withdrawButton =  document.createElement("button");
    withdrawButton.textContent = "Withdraw";

    withdrawButton.addEventListener("click", ()=>{
        let withdrawAmount = Number(withdrawinput.value);
        if(account.withdraw(withdrawAmount))
        {  
                Withdrawstatus.textContent = "Successfuly Withdraw";
            Withdrawstatus.style.color = "green";
            setTimeout(() => {
             
                
                Withdrawstatus.textContent = " ";
            }, 2000);
           
        }
        else
        { 
            Withdrawstatus.textContent = "Insufficient Balance";
            Withdrawstatus.style.color  = "red";
            setTimeout(() => {
              
               Withdrawstatus.textContent =  " ";
            
        }, 2000);
         
        }
        acBalance.textContent = `Balance: $${account.balance}`

        withdrawinput.value = " ";
    })



    containerForDep.append(depositInput, depositButton, depositStatus);
    containerforWith.append(withdrawinput, withdrawButton, Withdrawstatus);

    Accounts.push(account);
accountContainer.append(Name, acBalance, containerForDep, containerforWith);
    outPut.append(accountContainer);


    AccountHolder.value = "";
    Balance.value = "";
})

class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount){
        if(amount >= 0){
             this.balance += amount;
             return true;

        }
        return false;
       
    }
    withdraw(amount){
        if(this.balance >= amount && this.balance > 0)
        {
            this.balance -= amount;
            return true;
        }
        
        return false;
    }
}

