const student = {
    name: "Nitin",
    age: 21,
    marks: 92,
    grade: "",

    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Marks: ${this.marks}`);
        console.log(`Grade: ${this.grade}`);
    },

    isPassed() {
        return this.marks >= 35 ? "Passed" : "Failed";
    },
    calculateGrade() {
        if (this.marks >= 90 && this.marks <= 100) {

            this.grade = "A";
        }
        else if (this.marks >= 80) {

            this.grade = "B";
        }
        else if (this.marks >= 70) {

            this.grade = "C";
        }
        else if (this.marks >= 60) {

            this.grade = "D"
        }
        else {

            this.grade = "F";
        }
    },
    updateMarks(newMarks) {
        if (newMarks < 0 || newMarks > 100) {
            console.log("Invalid marks");
            return;
        }
        this.marks = newMarks;
        this.calculateGrade();

    }
};

student.updateMarks(75);
student.showDetails();
console.log(student.isPassed());





const bankAccount = {
    owner: "Nitin",
    AccountNumber: 41400598754,
    balance: 1000,

    showDetails() {
        console.log(`Owner: ${this.owner}`);
        console.log(`Account Number: ${this.AccountNumber}`);
        console.log(`Balance: ${this.balance}`)

    },
    transcationHistory: [],

    deposit(amount) {
        this.balance += amount;
        this.transcationHistory.push(`+${amount}`);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
            return;
        }
        this.balance -= amount;
        this.transcationHistory.push(`-${amount}`);

    },

    checkBlanace() {
        return this.balance
    }
    ,
    transcation() {
        return this.transcationHistory;
    }
};

console.log(bankAccount.owner);
console.log(bankAccount.AccountNumber);
console.log(bankAccount.balance);
bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log(bankAccount.checkBlanace());
console.log(bankAccount.transcation())
bankAccount.showDetails();



const playList = {
    name: "My Favorite Songs",
    songs: ["Believer", "Faded", "Alone"],
    currentSongIndex: 0,
    showCurrentSong() {
        return `Now Playing ${this.songs[this.currentSongIndex]}`;
    },

    nextSong() {
        if (this.currentSongIndex < this.songs.length - 1) {
            this.currentSongIndex++;
        }
        else {
            this.currentSongIndex = 0;
        }
    },
    previous() {
        if (this.currentSongIndex === 0) {
            this.currentSongIndex = this.songs.length - 1;
            return
        }
        this.currentSongIndex--;

    },

    addSong(songname) {
        const cleanSong = songname.trim();
        if (cleanSong === "") {
            throw new Error("Song Name Cannot be Empty.");
        }
        if (this.songs.includes(cleanSong)) {
            return "Song alredy Exists";
        }
        this.songs.push(cleanSong);
    },

    removeSong(songName) {
        const index = this.songs.indexOf(songName);
        if (index === -1) {
            return
        }
        this.songs.splice(index, 1);

    },

    showAllSongs() {
        this.songs.forEach((element, index) => {
            console.log(`${index + 1}. ${element}`)
        });
    }

}
console.log(playList.name);
console.log(playList.songs);
playList.nextSong()
playList.nextSong()
playList.addSong("Titanic")
playList.showAllSongs()
console.log(playList.showCurrentSong());



// 🏆 Project 4 — Contact Book
console.log("Project 4 - Contact Book");


const contactBook = {
    contacts: [],

    addContact(name, phone) {
        this.contacts.push({ name, phone });
    },
    showContacts() {
        this.contacts.forEach((contact) => {
            console.log(`${contact.name}: ${contact.phone} `);
        })

    },

    searchContact(ContactName) {

        const contact = this.contacts.find((contact) => {
            return contact.name === ContactName;
        })

        if (!contact) {
            throw new Error("Don't have this person");

        }

        console.log(`${contact.name}: ${contact.phone}`);


    }


}

// find will return new array;

contactBook.addContact("Nitin", "7778080094");
contactBook.addContact("Jack", "4425272424");
contactBook.showContacts();
contactBook.searchContact("Jack");




// 🏗️ Project 5 — Mini ATM


const ATM = {
    owner: "Nitin",
    pin: "1234",
    balance: 1000,
    transactionHistory: [],

    deposit(amount) {
        this.balance += amount
        this.transactionHistory.push(`+${amount}`);
    },
    withdraw(amount) {
        if (isNaN(amount)) {
            throw new Error("Plase Enter Number");
        }
        else if (Number(amount) < 0) {
            throw new Error("Please Enter the Amount");
        }
        else if (amount > this.balance) {
            throw new Error("Cheack your balance first bro");
        }
        this.balance -= amount;
        this.transactionHistory.push(`-${amount}`);
    },
    checkBalance() {
        return this.balance;
    },
    verifyPin(pin) {

        return this.pin === pin;
    },

    showTransactionHistory() {
        console.log(this.transactionHistory);

    },

    changePin(oldpin, newPin) {

        if (oldpin === this.pin) {
            this.pin = newPin;
        }
        else {
            throw new Error("Plase put correct old pin");

        }
    }
}
ATM.deposit(500);
ATM.withdraw(100);
console.log(ATM.checkBalance());
console.log(ATM.verifyPin("1234"));
ATM.showTransactionHistory();
ATM.changePin("1234", "2525")



// 🟢 Project 6 — Shopping Cart

const shoppingCart = {
    items: [],

    addProducts(name, price) {
        this.items.push({ name, price })
    },
    showProducts() {
        this.items.forEach((items, index) => {
            console.log(`${index + 1}. ${items.name} - ${items.price}`);
        })
    },
    removeProduct(productName) {
        const index = this.items.findIndex(item => item.name === productName);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    },

    calculateTotal() {
        const total = this.items.reduce((acc, prev) => {
            return acc + prev.price;
        }, 0)
        console.log(total);

    },

    countProducts() {
        console.log(this.items.length);

    }
    ,

    clearCart() {
        this.items = [];
    }



}

shoppingCart.addProducts("Keyboard", 1000);
shoppingCart.addProducts("PC", 25000);
shoppingCart.addProducts("Mouse", 1200);
shoppingCart.removeProduct("PC");
shoppingCart.calculateTotal();
shoppingCart.clearCart();
shoppingCart.showProducts();



// 🟢 Project 7 — Todo Manager

const todoManager = {
    tasks: [],

    addTask(task, completed) {
        this.tasks.push({ task, completed });
    },
    showTasks() {
        this.tasks.forEach((task, index) => {
            const flags = task.completed ? "✅" : "❌";
            console.log(`${index + 1}. ${task.task} ${flags}`);


        })
    },
    completTask(taskName){
        const index =  this.tasks.findIndex(item => item.task === taskName);
        if(index !== -1){
            this.tasks[index].completed = true;
        }
        else {
            console.log("Task not found");
            
        }
    },

    removeTask(taskName){
        const index =  this.tasks.findIndex((item) => item.task === taskName);
        if(index !== -1){
            this.tasks.splice(index, 1);
        }
    },

    countTask(){
      let count = 0;
       this.tasks.forEach(item =>{
            if(item.completed){
                count++;
            
            }

        })
        console.log(`Completed Task: ${count}`);
        

    },
    showcomplete_penddingTask(){
        console.log("Completed Tasks:");
        
        this.tasks.forEach(item =>{
            if(item.completed){
                console.log(item.task);
            
            }

        })

        console.log("Pending Tasks:");
        this.tasks.forEach((item)=>{
            if (!item.completed) {
                console.log(item.task);
                
            }
        })
        

    },
    clearCompletedTask(){
        [...this.tasks].forEach(item =>{
            if (item.completed) {
                const index  = this.tasks.indexOf(item);
                this.tasks.splice(index, 1)
                
            }
        })
        
    }


}

todoManager.addTask("Learn React", false);
todoManager.addTask("Learn Mathematics", true)
todoManager.addTask("Learn Node.js", true);
todoManager.addTask("Learn PHP", false);
todoManager.completTask("Learn PHP");
todoManager.removeTask("Learn PHP");

todoManager.showTasks();
todoManager.showcomplete_penddingTask()
todoManager.countTask();
todoManager.clearCompletedTask()
todoManager.showTasks();






