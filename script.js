document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="remove">Remove</button>
        `;

        const removeButton = li.querySelector('.remove');
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
