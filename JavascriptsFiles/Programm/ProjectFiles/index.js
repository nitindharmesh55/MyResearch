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

