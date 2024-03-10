document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-todo-btn');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const noTasksMessage = document.createElement('p'); // Create a paragraph for the message
    noTasksMessage.textContent = 'No tasks here';
    noTasksMessage.style.display = 'none'; // Initially hide the message
    noTasksMessage.style.color = 'black'; // Initially hide the message
    noTasksMessage.style.fontSize = 'larger'; // Initially hide the message
    noTasksMessage.style.opacity = '50%'; // Initially hide the message
    document.getElementById('todo-app').insertBefore(noTasksMessage, todoList); // Add it before the todoList in the DOM

    // Load tasks from local storage on page load
    loadTasksFromLocalStorage();

    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText) {
            noTasksMessage.style.display = 'none'; // Hide the no tasks message when adding a task
            // Proceed to create and append the new task as before...
            const listItem = createListItem(taskText);
            todoList.appendChild(listItem);

            // Save tasks to local storage after adding a new task
            saveTasksToLocalStorage();

            // Clear the input field
            inputField.value = '';
        }
    });

    function loadTasksFromLocalStorage() {
        const storedTasks = localStorage.getItem('todoTasks');
        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);
            tasks.forEach(task => {
                const listItem = createListItem(task);
                todoList.appendChild(listItem);
            });
        }
        updateNoTasksMessage();
    }

    function saveTasksToLocalStorage() {
        const tasks = Array.from(todoList.children).map(item => item.textContent.trim());
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
        updateNoTasksMessage();
    }

    function createListItem(taskText) {
        const listItem = document.createElement('li');
        // Continue with list item creation as before...
        const text = document.createElement('p');
        text.textContent = taskText;
        // Additional code for delete button and styling...

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';
        deleteBtn.onclick = function() {
            listItem.remove();
            saveTasksToLocalStorage(); // Update local storage and potentially show "No tasks here"
        };
        // Append text and button to listItem, then return it...

        listItem.appendChild(text);
        listItem.appendChild(deleteBtn);

        return listItem;
    }

    function updateNoTasksMessage() {
        const tasks = todoList.getElementsByTagName('li');
        if (tasks.length === 0) {
            noTasksMessage.style.display = ''; // Show the no tasks message if the list is empty
        } else {
            noTasksMessage.style.display = 'none'; // Otherwise, hide the message
        }
    }
});
