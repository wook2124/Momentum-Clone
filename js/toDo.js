const todoForm = document.querySelector(".js-toDoForm"),
  toDoInput = todoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  todoDiv = document.querySelector(".wrapper"),
  toDoAllDelete = todoDiv.querySelector("button");

const TODOS_LS = "toDos";

let toDos = [];

function allDeleteTodo(event) {
  if (localStorage.getItem("toDos") !== null) {
    // ??????? ? ?? ? ??
    localStorage.removeItem("toDos");
    toDoList.innerHTML = "";
    // location.reload();
  } else {
    alert("??? ???? ????");
  }
  const deleteBtn = event.target;
  // localStorage.removeItem('toDos');
  // location.reload();
}

function deleteToDo(event) {
  const btn = event.target; // evnet? ??? ???
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    //todo? ????? ?? ???? ??
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  //Todollist? ?????
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1; // ?? ?? 1? ??
  delBtn.classList.add("listDelete");
  delBtn.innerText = "??";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue === "") {
    alert("Write a to do??");
  } else {
    paintToDo(currentValue);
    toDoInput.value = "";
  }
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
  toDoAllDelete.addEventListener("click", allDeleteTodo);
}

init();
