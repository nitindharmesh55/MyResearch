let form = document.querySelector("form");
let Name = document.getElementById("name");
let Age = document.getElementById("age");
let Salary = document.getElementById("Salary")
let Dep = document.getElementById("dep");
let result = document.getElementById("result");
let type = document.getElementById("employee");
let teamSize;
let container;

type.addEventListener("change", ()=>{
    if(type.value == "Manager")
    {
        console.log("Nitin");
        
          container = document.createElement("div");
        container.classList.add("inputContainer");
        let teamLabel = document.createElement("label");
        teamLabel.textContent = "Team Size:";
       teamSize = document.createElement("input");
        teamSize.type = "number";
        container.append(teamLabel, teamSize);
        form.append(container)
    }
    else{
        if(container)
        container.remove();
    }

})

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    // Creating Employee Object;
    if(type.value == "Employee"){
    let employee =  new Employee(Name.value, Number(Age.value), Number(Salary.value), Dep.value);}
    else{
       


         let manager =  new Manager(Name.value, Number(Age.value), Number(Salary.value), Dep.value, Number(teamSize.value)) ;}
    

    
    
    


    // Clearing the input values;
    Name.value = "";
    Age.value = "";
    Salary.value = "";
    // Dep.value = "";
})

// Creating Class;

class Employee {
    constructor(name, age, Salary, dep) {
        this.name = name;
        this.age = age;
        this.Salary = Salary;
        this.dep = dep;
    }
    // Setters for Name;
    set name(newName){
        if(typeof newName === "string" &&  /^[A-Za-z ]+$/.test(newName) )
        {
            this._name = newName;
        }
        else{
            alert("Name can't be Empty");
        }
    }
    get name(){
        return  this._name;
    }
    // Setters for age;
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 16)
        {
            this._age = newAge;
        }
        else
        {
            alert("You must be at least 16 to be employee");
        }
    }

    get age (){
        return this._age;
    }
    // Setters for Salary;

    set Salary(newSalary){
        if(newSalary > 0)
        {
            this._Salary = newSalary;
        }
        else
        {
            alert("Salary Can't be Negative");
        }
    }

    get Salary(){
        return this._Salary;
    }

    calculateBonus(){
        return this.Salary * 0.1;
    }
}

class Manager extends Employee {
    constructor(name, age, Salary, dep, teamSize) {
        super(name, age, Salary, dep);
        this.teamSize = teamSize;

        
    }

    calculateBonus(){
        return this.Salary * 0.2;
    }
}

// let manager = new Manager("Nitin", 23, 150000, "IT", 12);