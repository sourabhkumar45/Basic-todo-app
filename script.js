"use strict";

let headerBtn = document.querySelector(".header");
let addbtn = document.querySelector(".add-btn");
let addModal = document.querySelector(".add-popup");
let taskContainer = document.querySelector(".task-container");
let cTaskContainer = document.querySelector(".compeleted-task-container");

headerBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("inactive")) {
    if (e.target.nextElementSibling != null) {
      // task list was clicked
      cTaskContainer.classList.add("hidden");
      taskContainer.classList.remove("hidden");
      e.target.nextElementSibling.classList.add("inactive");
      e.target.nextElementSibling.classList.remove("active");
    } else {
      e.target.previousElementSibling.classList.add("inactive");
      e.target.previousElementSibling.classList.remove("active");
      cTaskContainer.classList.remove("hidden");
      taskContainer.classList.add("hidden");
    }
    e.target.classList.add("active");
    e.target.classList.remove("inactive");
  }
});

addbtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `<img height = "25px"  width="25px" src="./asset/checkbox.png"></img>
 <input class="task-input" size="20"></input>`;
  console.log(div);
  taskContainer.appendChild(div);
});

taskContainer.addEventListener("click", (e) => {
  if (e.target.localName == "img") {
    taskContainer.removeChild(e.target.parentNode);
    let task = e.target.parentNode.lastElementChild.value;
    console.log(typeof task);
    console.log(e.target.parentNode.lastElementChild);
    let div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `<img height = "25px"  width="25px" src="./asset/check.png"></img>
     <input class="task-input" size="20" value="${task}"></input><img height = "25px"  width="25px" src="./asset/clear.png" class="delete-task">`;
    cTaskContainer.appendChild(div);
  }
});

cTaskContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-task")) {
    cTaskContainer.removeChild(e.target.parentNode);
  }
});
