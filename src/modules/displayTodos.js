import { getTodos } from "./todos";
import { container } from "./renderModule";
import { makeTextDashCase, convertChars, createDynamicList } from "./utility";

export function displayTodos() {
   const todos = getTodos();

   // Callback to generate each <li> for todos
   const itemGenerator = (todo) => {
      const task = document.createElement("li");
      task.classList.add("task");

      // Convert Chars and kebab case
      let todoTitleConverted = convertChars(todo._title);
      let currentTodoID = makeTextDashCase(todoTitleConverted);

      // Form side
      const checkForm = document.createElement("div");
      const checkBox = document.createElement("input");
      const checkboxLabel = document.createElement("label");

      const taskDetails = document.createElement("details");
      const detailsSummary = document.createElement("summary");
      const detailsContent = document.createElement("p");

      detailsSummary.textContent = todo._title;
      detailsContent.textContent = todo._description;

      taskDetails.classList.add("todo-details");
      taskDetails.appendChild(detailsSummary);
      taskDetails.appendChild(detailsContent);

      taskDetails.addEventListener("toggle", () => {
         taskDetails.classList.toggle("has-border", taskDetails.open);
      });

      /* Logical improvement: Will implement an id number for every todo and will assign that number here instead. 
      For now, this will remain todo.title  */
      checkBox.id = currentTodoID;
      checkboxLabel.htmlFor = currentTodoID;
      checkBox.setAttribute("type", "checkbox");
      checkForm.classList.add("is-checked-form");

      // Controls side
      const controlButtons = ["Edit", "Add to", "Flag", "Delete"];
      const controlIcons = ["pen-to-square", "arrow-right", "flag", "trash-can",];

      const todoControls = document.createElement("div");
      controlButtons.forEach((buttonText, index) => {
         const btnId = makeTextDashCase(buttonText);
         const btn = document.createElement("button");
         const iconTag = document.createElement("i");
         iconTag.classList.add("fa-solid", `fa-${controlIcons[index]}`);
         btn.appendChild(iconTag);
         btn.id = btnId;
         todoControls.appendChild(btn);
      });
      todoControls.classList.add("todo-controls");

      checkboxLabel.appendChild(taskDetails);
      checkForm.appendChild(checkBox);
      checkForm.appendChild(checkboxLabel);

      task.appendChild(checkForm);
      task.appendChild(todoControls);

      return task;
   };

   const taskViewUl = createDynamicList({
      data: todos,
      containerId: "tasks-ul",
      itemGenerator,
   });

   container.appendChild(taskViewUl);
}
