import { spliceTodos, spliceLists, getTodos, getLists } from "./barrel";
import { renderTodos } from "./barrel";

/* A series of security checks and precautions are in order for storing todos perhaps even encryption? Nobody knows! */

function sendItemToDB(key, value) {
   localStorage.setItem(key, JSON.stringify(value));
}

function getItemsFromDB(key) {
   const itemToFetch = localStorage.getItem(key);
   let fetchedItem = itemToFetch ? JSON.parse(itemToFetch) : [];
   handleDomainLogic(key, fetchedItem);

   return fetchedItem;
}

function handleDomainLogic(key, value) {
   switch (key) {
      case "todos":
         spliceTodos(value);
         break;
      case "lists":
         spliceLists(value);
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
export function fetchItemsFromStorage() {
   const unFilteredTodos = getTodos();
   manageDB(false, "todos", getTodos);
   renderTodos(unFilteredTodos);
   manageDB(false, "lists", getLists);
}
