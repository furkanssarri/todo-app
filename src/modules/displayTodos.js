import { getTodos } from "./todos";
import { container } from "./renderModule";

export function displayTodos() {
   let todos = getTodos();
   for (let index = 0; index < todos.length; index++) {
      const todo = todos[index];
      const task = document.createElement("div");
      task.classList.add("task");

      // Form side
      const checkForm = document.createElement("div");
      const checkBox = document.createElement("input");
      const checkboxLabel = document.createElement("label");

      let todoTitleConverted = convertChars(todo._title);
      let currentTodoID = makeTextDashCase(todoTitleConverted);
      
      /* Logical improvement: Will implement an id number for every todo and will assign that number here instead. 
      For now, this will remain todo.title  */
      checkBox.id = currentTodoID; 

      checkboxLabel.textContent = todo._title;
      checkboxLabel.htmlFor = currentTodoID;

      checkBox.setAttribute("type", "checkbox");
      checkForm.classList.add("is-checked-form");

      // Controls side
      const controlButtons = ["Edit", "Add to", "Flag", "Delete"]
      const controlIcons = ["pen-to-square", "arrow-right", "flag", "trash-can"];

      const todoControls = document.createElement("div");

      controlButtons.forEach((buttonText, index) => {
         const btnId = makeTextDashCase(buttonText);
         const btn = document.createElement("button");
         const icon = controlIcons[index];
         const iconTag = document.createElement("i");
         iconTag.classList.add("fa-solid", `fa-${icon}`);
         btn.appendChild(iconTag);
         btn.id = btnId
         todoControls.appendChild(btn);
      });

      todoControls.classList.add("todo-controls");

      checkForm.appendChild(checkBox);
      checkForm.appendChild(checkboxLabel);

      task.appendChild(checkForm);
      task.appendChild(todoControls);

      container.appendChild(task);
   }
}

export function convertChars(text) {
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

export function makeTextDashCase(text) {
   return text.replace(/\s+/g, '-').toLowerCase();
}