// 🔥 Project 13 — Task Tracker Pro
const missionBoard = [
    {
        task: "Build Portfolio",
        priority: "High",
        completed: false
    },
    {
        task: "Practice JavaScript",
        priority: "Medium",
        completed: false
    },
    {
        task: "Read Atomic Habits",
        priority: "Low",
        completed: false
    },
    {
        task: "Workout",
        priority: "High",
        completed: false
    }
];
const missionBoards = document.getElementById("missionBoard");

missionBoard.forEach(GetTask);

function GetTask(task) {
    const container = document.createElement("div");
    container.classList.add("task-card", "high");

    const dailyTask = document.createElement("h2");
    dailyTask.textContent = task.task;

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${task.priority}`;

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn")
    completeBtn.textContent = "Complete";

    completeBtn.onclick = () => {
        container.classList.toggle("completed");
        if (container.classList.contains("completed")) {
            completeBtn.textContent = "Completed ✅";
        }
        else {
            completeBtn.textContent = "Complete"
        }
    }

    //   promptBTN;

    const promptBtn = document.createElement("button");
    promptBtn.classList.add("edit-btn");
    promptBtn.textContent = "Edit";

    function updateBorder() {
        if (task.priority === "High") {
            container.style.border = "2px solid red";
        } else if (task.priority === "Medium") {
            container.style.border = "2px solid orange";
        } else {
            container.style.border = "2px solid green";
        }
    }
    updateBorder();

    promptBtn.onclick = () => {
        const Promptvalue = prompt("Enter Your Task: ");
        const priorityValue = prompt("Enter Your Priority: ");
        if (Promptvalue) {
            dailyTask.textContent = Promptvalue;
            task.task = Promptvalue;
        }
        if (priorityValue) {
            const capital = priorityValue.charAt(0).toUpperCase() + priorityValue.slice(1);

            priority.textContent = `Priority: ${capital}`
            task.priority = capital;

        }

        updateBorder()
    }

    // Delete BTNl

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("delete-btn");

    removeBtn.onclick = () => {
        container.remove();
    }

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");
    btnContainer.append(completeBtn, promptBtn, removeBtn);


    container.append(dailyTask, priority, btnContainer);

    missionBoards.append(container);
}



// 🔥 Project 14 — Movie Review Hub
const cinemaVault = [
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        rating: 8.7,
        favorite: false
    },
    {
        title: "Parasite",
        director: "Bong Joon-ho",
        rating: 8.5,
        favorite: false
    },
    {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        rating: 8.6,
        favorite: false
    },
    {
        title: "Whiplash",
        director: "Damien Chazelle",
        rating: 8.5,
        favorite: false
    }
];

const movieHub =  document.getElementById("movieHub");
cinemaVault.forEach(MovieUpdate);

function MovieUpdate(movie) {
    const container = document.createElement("div");
    container.classList.add("movie-card");

    const MovieName =  document.createElement("h2");
    MovieName.textContent = movie.title;


    const Director = document.createElement("p");
    Director.textContent =  movie.director;

    const rating =  document.createElement("span");
    rating.textContent  = `⭐ ${movie.rating}`;

    // action buttons;

    const actionContainer =  document.createElement("div");
    actionContainer.classList.add("action");

    // Favorite button;
    const Favorite =  document.createElement("button");
    Favorite.classList.add("fav-btn");
    Favorite.textContent = "❤ Favorite";


    const Rate =  document.createElement("button");
    Rate.classList.add("rate-btn");
    Rate.textContent = "Rate";


    
    const DeletBtn  =  document.createElement("button");
    DeletBtn.classList.add("remove-btn");
    DeletBtn.textContent = "Remove";


    Favorite.addEventListener("click", ()=>{
        Favorite.classList.toggle("favorite");
        if (Favorite.classList.contains("favorite")) {
            Favorite.textContent = "❤️ Favorited"  
        }
        else{
            Favorite.textContent =  "❤ Favorite";
        }
    });

    Rate.addEventListener("click", ()=>{
        const Rating =  Number(prompt("Enter a new rating (0 - 10): "));
        if (!isNaN(Rating) && Rating >= 0 && Rating <= 10){
            movie.rating = Rating;
            rating.textContent = `⭐ ${movie.rating}`
        }
        else{
            alert("Please Enter Valid Number:")
        }
        
    });

    DeletBtn.addEventListener("click", ()=>{
        container.remove();
    })

    actionContainer.append(Favorite, Rate, DeletBtn);

    container.append(MovieName, Director, rating , actionContainer);
    movieHub.append(container);
}