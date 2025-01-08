import { spliceTodos, spliceLists, getLists, getTodos } from "./data";
import { renderTodos } from "./render";

/* A series of security checks and precautions are in order for storing todos perhaps even encryption? Nobody knows! */


function sendItemToDB(key, data) {
   localStorage.setItem(key, JSON.stringify(data));
}

function getItemsFromDB(key) {
   const itemToFetch = localStorage.getItem(key);
   let fetchedItem = itemToFetch ? JSON.parse(itemToFetch) : [];
   handleDomainLogic(key, fetchedItem);

   return fetchedItem;
}

function handleDomainLogic(key, data) {
   switch (key) {
      case "todos":
         spliceTodos(data);
         break;
      case "lists":
         spliceLists(data);
         break;
      default:
         // Do nothing
         break;
   }
}

export const manageDB = function (conditional, key, value) {
   if (conditional) {
      sendItemToDB(key, value);
   } else {
      getItemsFromDB(key);
   }
};

window.addEventListener("load", fetchItemsFromStorage);

   function fetchItemsFromStorage() {
      const unFilteredTodos = getTodos();
      manageDB(false, "todos", getTodos);
      renderTodos(unFilteredTodos);
   }