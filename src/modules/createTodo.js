import Todo from "./Todo";
import { formElements } from "./utility";
import { manageDB } from "./storage";
import { addTodo, getTodos } from "./todos";

export default function createTodo() {
   const selectedPriority = Array.from(
      document.getElementsByName("priorityStatus"),
   ).find((radio) => radio.checked)?.value;


   console.log(formElements);

   const titleVal = formElements["title"].value.trim();
   const descriptionValue = formElements["description"].value.trim();
   const priorityValue = formElements.getPriorityStatus();
   const noteValue = formElements["note"].value.trim();
   const dateVal = new Date(formElements["date"].value);
   const isComplete = false;

   
   const newTodo = new Todo(titleVal, descriptionValue, dateVal, priorityValue, noteValue, isComplete);

   addTodo(newTodo);

   if (!newTodo) {
      return;
   } else {
      manageDB(true, getTodos());
   }

   window.addEventListener("load", getTodosFromStorage);

   function getTodosFromStorage() {
      manageDB(false, getTodos());
   }
}