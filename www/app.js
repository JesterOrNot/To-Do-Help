var createTodo = function(todo) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input")
  checkBox.type = "checkbox";
  let label = document.createElement("label")
  label.innerHTML = todo;
  let deleteButton = document.createElement("button")
  deleteButton.className = "delete";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
}
var addButton = document.getElementById('add');

addButton.onclick = function() {
  var parent = this.parentNode;
  var input = parent.children[0];

  if (input.value === "") {
      return;
  } else {
    let listItem = createTodo(input.value)
    let list = document.getElementById("todoList")
    list.appendChild(listItem)
    input.value = ""
  }
}
