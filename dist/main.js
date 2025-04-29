"use strict";

$(document).ready(function () {
  // Функція для збереження завдань у localStorage
  var saveTasks = function saveTasks() {
    var tasks = [];
    $('#todo-list .task-text').each(function () {
      tasks.push($(this).text());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Функція для завантаження завдань з localStorage
  var loadTasks = function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function (task) {
      return addTaskToList(task);
    });
  };

  // Функція для додавання завдання в список
  var addTaskToList = function addTaskToList(taskText) {
    $('#todo-list').append("\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                <span class=\"task-text\" style=\"cursor:pointer;\">".concat(taskText, "</span>\n                <div>\n                    <button class=\"btn btn-sm btn-warning edit-task me-1\">\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438</button>\n                    <button class=\"btn btn-sm btn-danger delete-task\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n                </div>\n            </li>\n        "));
  };
  loadTasks();

  // Додавання нового завдання по кліку на кнопку
  $('#add-task').on('click', function () {
    var taskText = $('#new-task').val().trim();
    if (taskText) {
      addTaskToList(taskText);
      saveTasks();
      $('#new-task').val('');
    }
  });

  // Показ завдання в модальному вікні по кліку на текст
  $('#todo-list').on('click', '.task-text', function () {
    var text = $(this).text();
    $('#modalTaskText').text(text);
    new bootstrap.Modal(document.getElementById('taskModal')).show();
  });

  // Видалення завдання по кліку на кнопку
  $('#todo-list').on('click', '.delete-task', function () {
    $(this).closest('li').remove();
    saveTasks();
  });

  // Редагування завдання по кліку на кнопку
  $('#todo-list').on('click', '.edit-task', function () {
    var $taskSpan = $(this).closest('li').find('.task-text');
    var currentText = $taskSpan.text();
    var newText = prompt('Редагувати завдання:', currentText);
    if (newText && newText.trim() !== '') {
      $taskSpan.text(newText.trim());
      saveTasks();
    }
  });
});