let tasks = [];

function addTask() {
    const input = document.getElementById('task');
    const newTask = input.value;
    if (newTask) {
        tasks.push(newTask);
        input.value = '';
        showTasks();
    }
}

function showTasks() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    tasks.foeEach((task, index) => {
        list.innerHTML += '<li>${task} <button onclick="deleteTask(${index})">Delete</button></li>';
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}