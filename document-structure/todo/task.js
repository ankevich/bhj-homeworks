let tasksList = document.getElementById("tasks__list");
let addButton = document.getElementById("tasks__add");

let addText = () => {
  let inputText = document.getElementById("task__input").value.trim();
  if (inputText != "") {
    tasksList.insertAdjacentHTML('beforeend', `
      <div class="task">
          <div class="task__title">
              ${inputText}
          </div>
          <a href="#" class="task__remove">&times;</a>
      </div>`)
  }
  
  let lastChild = tasksList.lastChild
  lastChild.getElementsByClassName("task__remove").item(0).onclick = () => {
    lastChild.remove()
    return false
  }
};

addButton.onclick = () => {
  addText();
  document.getElementById("task__input").value = ""
  return false;
};
