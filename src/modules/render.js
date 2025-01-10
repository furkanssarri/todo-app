import {
   createListPopup,
   getLists,
   getTodos,
   removeTodo,
   leftMenu,
   nav,
   renderTabs,
   createEditTodoForm,
   getSystemDefaultLists,
   updateTodoProps,
   makeTextDashCase,
   createDynamicList,
   formatText,
} from "./barrel";

/*This render module is very sloppy and is violating some of the important best practices suc as DRY and
more importantly, the Single Responsibility principle. A refactor is in order for this module in the future. */

export const mainArea = document.querySelector("main");
export const container = document.createElement("div");

// _________________________LISTS______________________
function getLastItem() {
   return nav.firstElementChild.lastElementChild.firstElementChild;
}

export function renderLists() {
   const lists = getLists();
   const itemGenerator = (list) => {
      const li = document.createElement("li");
      const anchorTag = document.createElement("a");
      const iconTag = document.createElement("i");

      iconTag.classList.add("fa-solid", "fa-folder-open");
      const listName = formatText(list.title);
      anchorTag.classList.add("filter-todos");
      anchorTag.id = list.id;

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
export function animateElements() {
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
         toggleMenuButton.classList.add("fa-angle-down");
      }
   });
}

//____________________________________TODOS_______________________________

export function renderTodos(todosToRender) {
   // Ensure a valid array of todos is passed
   if (!Array.isArray(todosToRender)) {
      console.error("Invalid todos array provided to renderTodos");
      return;
   }

   while (container.firstChild) {
      container.removeChild(container.firstChild);
   }

   // Render only the filtered todos
   const taskViewUl = createDynamicList({
      data: todosToRender,
      containerId: "tasks-ul",
      itemGenerator: (todo) => {
         const task = document.createElement("li");
         task.classList.add("task");

         const taskWrapper = document.createElement("div");
         taskWrapper.classList.add("todo-wrapper");

         // Left Side
         const taskInfo = document.createElement("div");
         taskInfo.classList.add("todo-info");

         const checkForm = document.createElement("div");
         checkForm.classList.add("is-checked-form");

         const checkBox = document.createElement("input");
         taskWrapper.id = todo.id;
         checkBox.setAttribute("type", "checkbox");

         const checkboxLabel = document.createElement("label");
         checkboxLabel.textContent = todo.title;

         const detailsWrapper = document.createElement("div");
         detailsWrapper.classList.add("details-wrapper");

         const propsContainer = document.createElement("div");
         propsContainer.classList.add("todo-details-container");

         let groupDiv;
         let propCount = 0;
         for (const key in todo) {
            if (
               !Object.prototype.hasOwnProperty.call(todo, key) ||
               key === "_id" ||
               key === "_isComplete"
            ) {
               // Will improve if needed
               continue;
            }
            if (propCount % 2 === 0) {
               groupDiv = document.createElement("div");
               groupDiv.classList.add("todo-group");
            }

            const content = document.createElement("p");
            content.classList.add("todo-item");

            const formattedKey = formatText(key);

            const keySpan = document.createElement("span");
            keySpan.classList.add("key");
            keySpan.textContent = `${formattedKey}: `;

            const valueSpan = document.createElement("span");
            valueSpan.classList.add("value");
            valueSpan.textContent = todo[key];

            content.append(keySpan, valueSpan);
            groupDiv.appendChild(content);

            // If two properties have been added to the group, append the groupDiv
            if (propCount % 2 === 1) {
               propsContainer.appendChild(groupDiv);
            }

            propCount++;
         }

         // If there's an unfinished group (odd number of props), append it
         if (propCount % 2 !== 0) {
            propsContainer.appendChild(groupDiv);
         }

         // Controls side
         const controlButtons = ["Edit", "Flag", "Add to", "Delete"];
         const controlIcons = [
            "fa-regular fa-pen-to-square",
            "fa-regular fa-flag",
            "fa-solid fa-arrow-right",
            "fa-regular fa-trash-can",
         ];

         const todoControls = document.createElement("div");
         controlButtons.forEach((buttonText, index) => {
            const btnId = makeTextDashCase(buttonText);
            const btn = document.createElement("button");
            const iconTag = document.createElement("i");
            iconTag.className = controlIcons[index];

            btn.classList.add("control-btn", btnId);
            btn.appendChild(iconTag);
            btn.id = btnId;
            todoControls.appendChild(btn);
         });
         todoControls.classList.add("todo-controls");

         checkForm.appendChild(checkBox);
         checkForm.appendChild(checkboxLabel);
         taskInfo.appendChild(checkForm);
         detailsWrapper.appendChild(propsContainer);
         taskWrapper.appendChild(taskInfo);
         taskWrapper.appendChild(todoControls);
         task.appendChild(taskWrapper);
         task.appendChild(detailsWrapper);

         taskInfo.addEventListener(
            "click",
            animateTodoContent(taskInfo, detailsWrapper),
         );

         return task;
      },
   });
   container.appendChild(taskViewUl);
}

// Todo details animation
function animateTodoContent(task, detailsWrapper) {
   task.addEventListener("click", () => {
      const isExpanded = detailsWrapper.classList.contains("expanded");

      if (isExpanded) {
         detailsWrapper.style.height = `${detailsWrapper.scrollHeight}px`; // Set current height
         requestAnimationFrame(() => {
            detailsWrapper.style.height = "0"; // Animate to height 0
         });
         detailsWrapper.classList.remove("expanded");
      } else {
         // Expand
         detailsWrapper.style.height = `${detailsWrapper.scrollHeight}px`; // Set to content height
         detailsWrapper.classList.add("expanded");

         // Reset height after transition
         detailsWrapper.addEventListener(
            "transitionend",
            () => {
               if (detailsWrapper.classList.contains("expanded")) {
                  detailsWrapper.style.height = "auto"; // Dynamic height adjustment
               }
            },
            { once: true },
         );
      }
   });
}

export function filterItems(e) {
   if (!e.target.classList.contains("filter-todos")) {
      console.log("Not filtering...");
      return;
   }
   const lists = getSystemDefaultLists();
   const clickElem = e.target.id;
   let list;
   switch (clickElem) {
      case "inbox":
         list = lists[0];
         break;
      case "today":
         list = lists[1];
         break;
      case "thisWeek":
         list = lists[2];
         break;
      default:
         const customLists = getLists();
         customLists.forEach((listElement) => {
            if (clickElem === listElement.id) {
               list = listElement;
               return list;
            }
         });
         break;
   }
   const filteredItems = list.filterTodos();
   renderTodos(filteredItems);
}

function handleMouseOver(event, tooltips) {
   const btnId = event.target.id;
   const tooltipText = tooltips[btnId] || "Action";

   const tooltip = document.createElement("div");
   tooltip.classList.add("tooltip");
   tooltip.textContent = tooltipText;

   event.target.parentElement.appendChild(tooltip);

   tooltip.style.left = `${event.target.offsetLeft + event.target.offsetWidth + 10}px`;
   tooltip.style.top = `${event.target.offsetTop}px`;
   tooltip.style.opacity = "1";
   tooltip.style.visibility = "visible";

   event.target.tooltipElement = tooltip;
}

function handleMouseOut(event) {
   setTimeout(() => {
      const tooltip = event.target.tooltipElement;
      if (tooltip) {
         tooltip.style.opacity = "0";
         tooltip.style.visibility = "hidden";
         tooltip.remove();
         delete event.target.tooltipElement;
      }
   }, 50);
}

function cleanupTooltip(target) {
   const tooltip = target.tooltipElement;
   if (tooltip) {
      tooltip.style.opacity = "0";
      tooltip.style.visibility = "hidden";
      tooltip.remove();
      delete target.tooltipElement;
   }
}

function handleClick(event) {
   cleanupTooltip(event.target);
   const todos = getTodos();
   const btnId = event.target.parentElement.id;
   const todoId = event.target.parentElement.parentElement.parentElement.id;
   const todo = todos.find((todo) => todo.id === todoId);
   if (todo) {
      if (btnId === "edit") {
         createEditTodoForm(todo);
      } else if (btnId === "flag") {
         updateTodoProps(event, todo, todo.priority);
      } else if (btnId === "add-to") {
         updateTodoProps(event, todo, todo.listId);
      } else if (btnId === "delete") {
         removeTodo(todo);
      }
   }
}

// Button Operations
export function handleOperations() {
   const tooltips = {
      edit: "Edit todo",
      flag: "Change priority",
      "add-to": "Add to another list",
      delete: "Delete todo",
   };

   container.addEventListener("mouseover", (event) => {
      if (event.target.classList.contains("control-btn")) {
         if (
            !event.relatedTarget ||
            !event.target.contains(event.relatedTarget)
         ) {
            handleMouseOver(event, tooltips);
         }
      }
   });

   container.addEventListener("mouseout", (event) => {
      if (event.target.classList.contains("control-btn")) {
         if (
            !event.relatedTarget ||
            !event.target.contains(event.relatedTarget)
         ) {
            handleMouseOut(event);
         }
      }
   });
   container.addEventListener("click", (event) => {
      if (event.target.parentElement.classList.contains("control-btn")) {
         handleClick(event);
      }
   });
   document.addEventListener("click", (event) => {
      if (!event.target.classList.contains("control-btn")) {
         // Remove any lingering tooltips if click occurred outside buttons
         const buttons = container.querySelectorAll(".control-btn");
         buttons.forEach((btn) => cleanupTooltip(btn));
      }
   });
}

//_____________________________RENDER________________________________________

export function render() {
   mainArea.appendChild(leftMenu);
   container.classList.add("container");
   mainArea.appendChild(container);
   leftMenu.appendChild(nav);
}
