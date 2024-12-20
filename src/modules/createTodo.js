import Todo from "./Todo";
import { formElements } from "./createForm";
import { manageDB } from "./storage";
import { addTodo, getTodos } from "./todos";

export default function createTodo() {
   const selectedPriority = Array.from(
      document.getElementsByName("priorityStatus"),
   ).find((radio) => radio.checked)?.value;

   if (selectedPriority) {
      console.log(`selected prio: ${selectedPriority}`);
   } else {
      console.log(`no selected prio`);
   }

   const titleVal = formElements.titleInput.value.trim();
   const descriptionValue = formElements.descriptionInput.value.trim();
   const priorityValue = formElements.getPriorityStatus();
   const noteValue = formElements.noteInput.value.trim();
   const dateVal = new Date(formElements.dateInput.value);
   const isComplete = false;
   
   const newTodo = new Todo(titleVal, descriptionValue, dateVal, priorityValue, noteValue, isComplete);

   console.log(getTodos());
   addTodo(newTodo);
   console.log(getTodos());

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

