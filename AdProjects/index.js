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
    calculateGrade(){
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
    owner:"Nitin",
    AccountNumber :41400598754,
    balance:1000,

    showDetails(){
       console.log(`Owner: ${this.owner}`);
       console.log(`Account Number: ${this.AccountNumber}`);
       console.log(`Balance: ${this.balance}`)
       
    },
    transcationHistory:[],

    deposit(amount){
        this.balance += amount;
        this.transcationHistory.push(`+${amount}`);
    },

    withdraw(amount){
        if (amount > this.balance) {
            console.log("Insufficient Balance");
            return;
        }
        this.balance -= amount;
        this.transcationHistory.push(`-${amount}`);
 
    },

    checkBlanace(){
        return this.balance
    }
    , 
    transcation(){
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
    name:"My Favorite Songs",
    songs:["Believer", "Faded", "Alone"],
    currentSongIndex:0,
    showCurrentSong(){
        return `Now Playing ${this.songs[this.currentSongIndex]}`;
    },

    nextSong(){
        if(this.currentSongIndex < this.songs.length - 1){
           this.currentSongIndex++;
        }
        else{
            this.currentSongIndex = 0;
        }  
    },
    previous(){
      if(this.currentSongIndex === 0){
        this.currentSongIndex = this.songs.length-1;
        return
      }
      this.currentSongIndex--;

    }, 

    addSong(songname){
        const cleanSong = songname.trim();
        if (cleanSong === "") {
            throw new Error("Song Name Cannot be Empty.");
        }
        if (this.songs.includes(cleanSong)) {
            return "Song alredy Exists";
        }
        this.songs.push(cleanSong);
    },

    removeSong(songName){
        const index = this.songs.indexOf(songName);
        if(index === -1){
            return
        }
        this.songs.splice(index, 1);
     
    },

    showAllSongs(){
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





