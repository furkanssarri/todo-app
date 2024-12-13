import Todo from "./Todo";
import { titleInput, descriptionInput, dateInput, priorityStatus, noteInput } from "./createForm";
import { manageDB } from "./storage";
import { todos } from "./todos";

export default function () {
   const titleVal = titleInput.value.trim();
   const descriptionValue = descriptionInput.value.trim();
   const priorityValue = priorityStatus.value;
   const noteValue = noteInput.value.trim();
   const dateVal = dateInput.value.trim();
   const isComplete = false;
   const newTodo = new Todo(titleVal, descriptionValue, dateVal, priorityValue, noteValue, isComplete);

   console.log(todos);
   todos.push(newTodo);
   console.log(todos);

   if (!newTodo) {
      return;
   } else {
      manageDB(true, todos);
   }

   window.addEventListener("load", getTodos);

   function getTodos() {
      manageDB(false, todos);
   }
};