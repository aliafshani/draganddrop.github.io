let inputValue = document.querySelector("#todo_input");
let userNewToDoInput = "";
let submitToDOInput = document.querySelector("#todo_submit");
let notStatusBox = document.querySelectorAll(".status")[0];

const dragsStartHandler = (event) => {
  event.dataTransfer.setData("elemId", event.target.id);
};
const dropHandler = (event) => {
  let dropedItem = event.dataTransfer.getData("elemId");
  let targetElem = document.getElementById(dropedItem);

  event.target.append(targetElem);
};
const dragOverHandler = (event) => {
  event.preventDefault();
};

inputValue.addEventListener("keyup", (event) => {
  userNewToDoInput = event.target.value;
});

submitToDOInput.addEventListener("click", () => {
  if (userNewToDoInput != "") {
    let newTodo = document.createElement("div");
    newTodo.setAttribute("class", "todo");
    newTodo.setAttribute("ondragStart", "dragsStartHandler(event)");
    newTodo.setAttribute("draggable", "true");
    newTodo.innerHTML = userNewToDoInput;
    newTodo.setAttribute("id", userNewToDoInput);

    let deleteIcon = document.createElement("span");
    deleteIcon.setAttribute("class", "close");
    deleteIcon.innerHTML = "&times;";
    newTodo.append(deleteIcon);
    deleteIcon.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });

    notStatusBox.append(newTodo);
    inputValue.value = "";
    modal.classList.remove("active");
    modalBackGround.classList.remove("active");
  }
});
