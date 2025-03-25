const taskList = document.getElementById("taskList");

const initialTasks = ["homework1", "homework2", "homework3"];

function loadInitialTasks() {
    initialTasks.forEach(task => addTask(task));
}

function addTask(taskText = null) {
    const input = document.getElementById("taskInput");
    const text = taskText ? taskText : input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.innerHTML = `<span>${text}</span> <button class="delete-btn">X</button>`;
    taskList.appendChild(li);

    if (!taskText) input.value = "";
}

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});

loadInitialTasks();