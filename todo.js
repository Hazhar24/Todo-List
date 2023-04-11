let $ = document;
let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".add");
let todoUlElem = $.querySelector(".todos");

function addNewTodo(newTodo) {
  let newTodoLi = $.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";
  let newTodoTitleSpan = $.createElement("span");
  newTodoTitleSpan.innerHTML = newTodo;
  let newTodoTrash = $.createElement("i");
  newTodoTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
  newTodoTrash.className = "fa fa-trash-o delete";
  newTodoLi.append(newTodoTitleSpan, newTodoTrash);
  todoUlElem.append(newTodoLi);
}

addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let newTodo = event.target.value.trim();

  if (event.keyCode === 13) {
    if (newTodo) {
      inputElem.value = "";
      addNewTodo(newTodo);
    }
  }
});
