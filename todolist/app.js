//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", delateChack);

//Functions
function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  const complatedButton = document.createElement("button");
  complatedButton.innerHTML = '<i class="fas fa-check"></i>';
  complatedButton.classList.add("complate-btn");
  todoDiv.appendChild(complatedButton);
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function delateChack(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove()
  }
  if (item.classList[0] === 'complate-btn'){
    const nzm = document.querySelectorAll(".todo-item");
    console.log(nzm[0])
    nzm[0].style.textDecoration = "line-through"
    }
}
