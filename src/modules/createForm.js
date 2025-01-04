import { format } from "date-fns";
import { createTodo, createList } from "./createData";
import {
   createPopupForm,
   // formElements,
   listenForm,
} from "./utility";
import { addList, getLists } from "./data";

/*An event listener management is in order to improve security.
And a form validation is in order.
*/

// _______________________CREATE LIST FORM______________________
let listForm;

export function createListPopup() {
   const listFormConfig = {
      formId: "list",
      inputs: [
         { id: "title", name: "title", placeholder: "Title" },
         { id: "description", name: "description", placeholder: "Description" },
      ],
      priority: false,
      submitText: "Create List",
   };
   createPopupForm(listFormConfig);
   listForm = document.querySelector("#list-form");
   listenForm(listForm, createList);
}

// __________________CREATE TODO FORM_____________________
let today = format(new Date(), "yyyy-MM-dd");
let todoForm;
export function createForm() {
   const lists = getLists();
   const dropdownElement = createDropdownFromLists(lists, {
      id: "todoListsDropdown",
      name: "todoList",
   });
   const todoFormConfig = {
      formId: "todo",
      inputs: [
         { id: "title", name: "title", placeholder: "Title" },
         { id: "description", name: "description", placeholder: "Description" },
         { id: "date", name: "dueDate", type: "date", min: today },
      ],
      priority: true,
      dropdownElement,
      submitText: "Add Todo",
   };
   createPopupForm(todoFormConfig);
   todoForm = document.querySelector("#todo-form");
   listenForm(todoForm, createTodo);
}

const addNewBtn = document.querySelector(".fa-plus");
addNewBtn.addEventListener("click", createForm);

export function createDropdownFromLists(lists, dropdownConfig = {}) {
   if (!Array.isArray(lists) || lists.length === 0) {
      console.warn("No valid lists provided to create dropdown.");
      return null; // Return null if lists are invalid
   }

   const dropdown = document.createElement("select");
   dropdown.id = dropdownConfig.id || "dynamicDropdown";
   dropdown.name = dropdownConfig.name || "listDropdown";

   // Create a default placeholder option
   const placeholderOption = document.createElement("option");
   placeholderOption.disabled = true; // not selectable
   placeholderOption.selected = true; // show by default
   placeholderOption.hidden = true; // hidden once opened
   placeholderOption.value = "";
   placeholderOption.textContent = "Select";
   dropdown.appendChild(placeholderOption);

   lists.forEach((list) => {
      const optionElement = document.createElement("option");
      optionElement.value = list.id || list.title; // Use `id` or `name` for value
      optionElement.textContent = list.title || list; // Use the name or fallback to raw list item
      dropdown.appendChild(optionElement);
   });

   return dropdown;
}
