//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click',addTodo);

//Functions
function addTodo(event) {
    event.preventDefault();
    console.log("hello")
}