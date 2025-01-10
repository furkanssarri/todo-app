import "./style.css";
import "animate.css";

import {
   render,
   animateElements,
   createAddTodoForm,
   filterItems,
   fetchItemsFromStorage,
   handleOperations,
   getTodos,
   renderTodos,
} from "./modules/barrel";

/* A global namespace check is in order for the project- An easy way would be to check the window object
on the browser console. */

function init() {
   fetchItemsFromStorage();
   const unFilteredTodos = getTodos();
   render();
   renderTodos(unFilteredTodos);
   animateElements();
   handleOperations();

   const filterLists = document.querySelectorAll(".filter-todos");
   filterLists.forEach((listItem) => {
      listItem.addEventListener("click", filterItems);
   });

   const addNewBtn = document.querySelector(".fa-plus");
   addNewBtn.addEventListener("click", createAddTodoForm);
}

document.addEventListener("DOMContentLoaded", init);
