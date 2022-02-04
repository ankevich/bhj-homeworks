let tasksList = document.getElementById("tasks__list");
let addButton = document.getElementById("tasks__add");

let addText = () => {
  let inputText = document.getElementById("task__input").value;
  if (inputText != "") {
    tasksList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${inputText}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;
  }
  let crosses = Array.from(tasksList.getElementsByClassName("task__remove"));
  crosses.map((cross) => {
    cross.onclick = () => {
      cross.closest(".task").remove()
    };
  });
};

addButton.onclick = () => {
  addText();
  return false;
};
