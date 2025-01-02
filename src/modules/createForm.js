import { format } from "date-fns";
import getInfo from "./createTodo";
import { createPopupForm } from "./utility";

/* This module is sloppy and is violating some of the important best practices such as DRY and Single responsibility.
A look back -and potentially a refactor- is in order for this module in the future.

Additionally an encapsulation is in order for the formElements here to improve security.

Also an event listener management is in order to improve security.

And lastly, a form validation is in order.
*/


let today = format(new Date(), "yyyy-MM-dd");
let todoForm;
export function createForm() {
   const todoFormConfig = {
      formId: "todo",
      inputs: [
         {id: "title", name: "title", placeholder: "Title",},
         {id: "description", name: "description", placeholder: "Description",},
         {id: "date", name: "date", type: "date", min: today,},
         {id: "note", name: "note", placeholder: "Note",},
      ],
      priority: true,
      submitText: "Add Todo",
   };
   createPopupForm(todoFormConfig);
   todoForm = document.querySelector("#todo-form");
   listenForm();
}

const addNewBtn = document.querySelector(".fa-plus");
addNewBtn.addEventListener("click", createForm);

function listenForm() {
   if (todoForm) {
      todoForm.addEventListener("submit", (e) => {
         // e.preventDefault();
         getInfo();
         const inputs = todoForm.querySelectorAll("input");
         inputs.forEach(input => {
            input.value = "";
         });
      })
   } else {
      return;
   }
}