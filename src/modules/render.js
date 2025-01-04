import { getTodos } from "./data";
import { manageDB } from "./storage";
import { nav }from "./leftMenu";
import { leftMenu } from "./leftMenu";
// import { displayTodos } from "./displayTodos";

import { getLists } from "./data";
import { makeTextDashCase, createDynamicList, convertChars } from "./utility";
import { renderTabs }from "./leftMenu";
import { createListPopup } from "./createForm";

/*This render module is very sloppy and is violating some of the important best practices suc as DRY and
more importantly, the Single Responsibility principle. A refactor is in order for this module in the future. */

// _________________________LISTS______________________

function getLastItem() {
   return nav.firstElementChild.lastElementChild.firstElementChild;
}

export function renderLists() {
   const lists = getLists();
   console.log(lists)
   const itemGenerator = (list) => {
      const li = document.createElement("li");
      const anchorTag = document.createElement("a");
      const iconTag = document.createElement("i");

      iconTag.classList.add("fa-solid", "fa-folder-open");
      const listName = makeTextDashCase(list.title);

      anchorTag.append(iconTag, listName);
      li.appendChild(anchorTag);

      return li;
   };

   // Additional "New List" element
   const addProjectLi = document.createElement("li");
   const addProjectAnchor = document.createElement("a");
   const addProjectIcon = document.createElement("i");

   addProjectIcon.classList.add("fa-solid", "fa-plus");
   addProjectAnchor.append(addProjectIcon, "New List");
   addProjectLi.appendChild(addProjectAnchor);

   const subUl = createDynamicList({
      data: lists,
      containerId: "sub-ul",
      containerClass: ["visible"],
      itemGenerator,
      additionalElements: [addProjectLi],
   });

   const lastLiContainer = getLastItem();
   lastLiContainer.appendChild(subUl);
   addProjectAnchor.addEventListener("click", createListPopup);
}

// Lists menu animation
setTimeout(() => {
   renderTabs();
   const toggleMenuButton = document.querySelector("#toggle-menu");
   const projectSubList = document.querySelector("#sub-ul");
   
   toggleMenuButton.addEventListener("click", () => {
      if (projectSubList.classList.contains("collapsed")) {
         projectSubList.style.height = `${projectSubList.scrollHeight}px`; // Explicitly set height for transition
         projectSubList.classList.remove("collapsed");
         projectSubList.classList.add("expanded");
         toggleMenuButton.classList.remove("fa-angle-down");
         toggleMenuButton.classList.add("fa-angle-up");
         // Wait for the transition to complete, then reset inline styles
         setTimeout(() => {
            projectSubList.style.height = "auto"; // Reset height to auto after expansion
         }, 300); // Match the CSS transition duration
      } else {
         projectSubList.style.height = `${projectSubList.scrollHeight}px`; // Set current height for smooth collapse
         
         // Force reflow to apply height change
         requestAnimationFrame(() => {
            projectSubList.style.height = "0"; // Collapse the menu
         });

         projectSubList.classList.remove("expanded");
         projectSubList.classList.add("collapsed");
         toggleMenuButton.classList.remove("fa-angle-up");
         toggleMenuButton.classList.add("fa-angle-down")
      }
   });
}, 90);

//____________________________________TODOS_______________________________


export function renderTodos() {
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

   render().container.appendChild(taskViewUl);
}


//_____________________________RENDER________________________________________

export function render() {
   const mainArea = document.querySelector("main");

   mainArea.appendChild(leftMenu);

   const container = document.createElement("div");

   container.classList.add("container");

   mainArea.appendChild(container);

   window.addEventListener("load", fetchItemsFromStorage);

   function fetchItemsFromStorage() {
      manageDB(false, "todos", getTodos);
      renderTodos();
      manageDB(false, "lists", getLists);
   }

   leftMenu.appendChild(nav);

   return {
      mainArea,
      container,
   }
}
