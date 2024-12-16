import Todo from "./Todo";
import createPopUpForm from "./createForm";
import { formElements } from "./createForm";
import { manageDB } from "./storage";
import { todos } from "./todos";

export default function () {
   const titleVal = formElements.titleInput.value.trim();
   const descriptionValue = formElements.descriptionInput.value.trim();
   const priorityValue = formElements.priorityStatus.value;
   const noteValue = formElements.noteInput.value.trim();
   const dateVal = formElements.dateInput.value.trim();
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

   // window.addEventListener("load", getTodos);

   // function getTodos() {
   //    manageDB(false, todos);
   // }
};