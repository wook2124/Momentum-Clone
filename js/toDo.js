const todo_section = document.querySelector(".todo-section"),
    todo_form = todo_section.querySelector(".js-todo"),
    todo_input = todo_section.querySelector(".todo__input"),
    todo_list = todo_section.querySelector(".js-todo-list");

const TODO_LS = "todos";
let TODOS = [];
let todoId = 0;

function deleteTodo(e) {
    const btn = e.target;
    const li = btn.parentElement;
    todo_list.removeChild(li);

    TODOS = TODOS.filter(function(todo) {
        return todo.id !== parseInt(li.id);
    });
    saveTodos();
    // location.reload()
}

function saveTodos() {
    string_todos = JSON.stringify(TODOS);
    localStorage.setItem(TODO_LS, string_todos);
}

function writeTodos(text) {
    const list = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    todoId += 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    list.appendChild(span);
    list.appendChild(delBtn);
    list.id = todoId;
    todo_list.appendChild(list);
    const todoObj = {
        id: todoId,
        text: text
    };
    TODOS.push(todoObj);
    console.log("savetodos");
    saveTodos();
}

function getTodos() {
    const loaded_todos = localStorage.getItem(TODO_LS);

    if (loaded_todos !== null) {
        const parsed_todos = JSON.parse(loaded_todos);
        parsed_todos.forEach(function(todo) {
            writeTodos(todo.text);
        });
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const value = todo_input.value;
    writeTodos(value);
    todo_input.value = "";
}

function init() {
    getTodos();
    todo_form.addEventListener("submit", handleSubmit);
}

init();