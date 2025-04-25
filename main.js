$(document).ready(function () {
    function saveTasks() {
        const tasks = [];
        $('#todo-list .task-text').each(function () {
            tasks.push($(this).text());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToList(task);
        });
    }
    function addTaskToList(taskText) {
        $('#todo-list').append(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="task-text" style="cursor:pointer;">${taskText}</span>
          <div>
            <button class="btn btn-sm btn-warning edit-task me-1">Редагувати</button>
            <button class="btn btn-sm btn-danger delete-task">Видалити</button>
          </div>
        </li>
      `);
    }
    loadTasks();
    $('#add-task').on('click', function () {
        const taskText = $('#new-task').val().trim();
        if (taskText) {
            addTaskToList(taskText);
            saveTasks();
            $('#new-task').val('');
        }
    });
    $('#todo-list').on('click', '.task-text', function () {
        const text = $(this).text();
        $('#modalTaskText').text(text);
        new bootstrap.Modal(document.getElementById('taskModal')).show();
    });
    $('#todo-list').on('click', '.delete-task', function () {
        $(this).closest('li').remove();
        saveTasks();
    });
    $('#todo-list').on('click', '.edit-task', function () {
        const $taskSpan = $(this).closest('li').find('.task-text');
        const currentText = $taskSpan.text();
        const newText = prompt('Редагувати завдання:', currentText);
        if (newText !== null && newText.trim() !== '') {
            $taskSpan.text(newText.trim());
            saveTasks();
        }
    });
});