let studentName = document.getElementById("studentName");
let age  =  document.getElementById("age");
let marks = document.getElementById("marks");
let submit =  document.getElementById("Submit");
let outPut = document.getElementById("output");



let form  = document.querySelector("form");
let students = [];

form.addEventListener("submit", (Event)=>{
    Event.preventDefault();

    let StudentId =  Date.now();

    let student = new Student(studentName.value , Number(age.value)  , Number( marks.value), StudentId);
   
    students.push(student);


    // Creating container for Student infor to show it on web page after append it to the output;

    let studentContainer = document.createElement("div");
    studentContainer.classList.add("studentContainer");

    let PassingStatus =  document.createElement("p");
    if(student.getStatus())
    {
        PassingStatus.textContent = "Passed";
        PassingStatus.style.color = "Green";
    }
    else
    {
        PassingStatus.textContent = "Failed";
        PassingStatus.style.color = "red";
    }

    let STUDENTID =  document.createElement("p");
    STUDENTID.textContent =  `ID:  ${student.id}`;

    let Name = document.createElement("p");
    Name.textContent =  `Student Name: ${student.name}`;

    let Age  = document.createElement("p");
    Age.textContent =  `Age:${student.age}`;

    let Marks  = document.createElement("p");
    Marks.textContent  = `Marks: ${student.marks}`

    let grade =  document.createElement("p");
    grade.textContent = `Grade: ${student.getGrade()}`;


    // Deleting Button for removing specific Student;
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove")
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", ()=>{
        studentContainer.remove();
    })


// appending the value in the studentContainer;
studentContainer.append( deleteBtn, PassingStatus, STUDENTID, Name,Age, Marks, grade);

// Appending the studentContainer to Output;
outPut.append(studentContainer);

// Clearing out the Form;
studentName.value  = "";
age.value =  "";
marks.value  = "";


    




})


class Student {
    constructor(name, age, marks, id) {
        this.name = name;
        this.age = age;
        this.marks =  marks;
        this.id = id;
    }
   
    getGrade(){
        if(this.marks >= 90)
        {
            return  "A";
        }
        else if(this.marks >= 80)
        {
            return "B";
        }
        else if(this.marks >= 70)
        {
            return "C";
        }
        else if(this.marks >= 60)
        {
            return "D"
        }
        else
        {
            return "F";
        }
    }
    getStatus()
    {
        if(this.marks >= 40)
        {
            return true;
        }
        return false;
    }
}