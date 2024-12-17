import { todos } from "./todos";
import { manageDB } from "./storage";

/*This render module is very sloppy and is violating some of the important best practices suc as DRY and
more importantly, the Single Responsibility principle. A refactor is in order for this module in the future. */

export const mainArea = document.querySelector("main");
const hamburger = document.querySelector(".fa-bars");
const leftMenu = document.createElement("div");

hamburger.addEventListener("click", () => {
   if (leftMenu.classList.contains("hide")) {
      leftMenu.classList.remove("animate__slideOutLeft");
      leftMenu.classList.add("animate__slideInLeft");
      leftMenu.classList.remove("hide");
      leftMenu.classList.add("show");
   } else {
      leftMenu.classList.remove("animate__slideInLeft");
      leftMenu.classList.add("animate__slideOutLeft");
      setTimeout(() => {
         leftMenu.classList.remove("show");
         leftMenu.classList.add("hide");
      }, 850);
   }
});

leftMenu.classList.add("left-menu", "hide", "animate__animated");

mainArea.appendChild(leftMenu);

const container = document.createElement("div");

container.classList.add("container");

mainArea.appendChild(container);

window.addEventListener("load", getTodos);

function getTodos() {
   manageDB(false, todos);
   init();
}

function init() {
   for (let index = 0; index < todos.length; index++) {
      const todo = todos[index];
      const task = document.createElement("div");
      task.classList.add("task");

      // Form side
      const checkForm = document.createElement("div");
      const checkBox = document.createElement("input");
      const checkboxLabel = document.createElement("label");

      let todoTitleConverted = convertChars(todo.title);
      let currentTodoID = todoTitleConverted.replace(/\s+/g, '-').toLowerCase();

      /* Logical improvement: Will implement an id number for every todo and will assign that number here instead. 
      For now, this will remain todo.title  */
      checkBox.id = currentTodoID; 

      checkboxLabel.textContent = todo.title;
      checkboxLabel.htmlFor = currentTodoID;

      checkBox.setAttribute("type", "checkbox");
      checkForm.classList.add("is-checked-form");

      // Controls side
      const todoControls = document.createElement("div");
      const editBtn = document.createElement("button");
      const prioBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");

      const editFa = document.createElement("i");
      const prioFa = document.createElement("i");
      const deleteFa = document.createElement("i");

      editFa.classList.add("fa-solid", "fa-pen-to-square");
      prioFa.classList.add("fa-solid", "fa-flag");
      deleteFa.classList.add("fa-solid", "fa-trash-can");

      editBtn.appendChild(editFa);
      prioBtn.appendChild(prioFa);
      deleteBtn.appendChild(deleteFa);

      todoControls.classList.add("todo-controls");

      checkForm.appendChild(checkBox);
      checkForm.appendChild(checkboxLabel);

      const controlBtns = [editBtn, prioBtn, deleteBtn];
      controlBtns.forEach((btn) => {
         todoControls.appendChild(btn);
      });

      task.appendChild(checkForm);
      task.appendChild(todoControls);

      container.appendChild(task);
   }
}

function convertChars(text) {
   const charMap = {
      "ı": "i",
      "ü": "u",
      "ğ": "g",
      "ç": "c",
      "ö": "o",
      "ş": "s",
   };

   return text.replace(/[ığçöşü]/g, (match) => charMap[match]);
}
