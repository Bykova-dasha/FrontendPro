document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        taskDiv.classList.toggle("completed");
        saveTasks();
    });
    let taskLabel = document.createElement("span");
    taskLabel.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.addEventListener("click", () => {
        taskDiv.remove();
        saveTasks();
    });

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);

    taskInput.value = "";
    saveTasks();
}
function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".task").forEach(task => {
        tasks.push({
            text: task.querySelector("span").textContent,
            completed: task.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        if (task.completed) {
            taskDiv.classList.add("completed");
        }
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            taskDiv.classList.toggle("completed");
            saveTasks();
        });

        let taskLabel = document.createElement("span");
        taskLabel.textContent = task.text;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Видалити";
        deleteBtn.addEventListener("click", () => {
            taskDiv.remove();
            saveTasks();
        });
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskLabel);
        taskDiv.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(taskDiv);
    });
}
