const form = document.getElementById('add-todo');
const input = form.querySelector('input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function (event){
    event.preventDefault();

    const todoText = input.value.trim();

    if (todoText === '') return;

    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = todoText;

    button.addEventListener ('click', function () {
        if (button.style.textDecoration === 'line-through') {
            li.remove();
        } else {
            button.style.textDecoration = 'line-through';
        }
    });

    li.appendChild(button);
    todoList.appendChild(li);

    input.value = '';
});