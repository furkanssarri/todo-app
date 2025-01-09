import { format } from "date-fns";
import { createTodo, createList, updateTodo } from "./barrel";
import {
   createPopupForm,
   // formElements,
   listenForm,
} from "./barrel";
import { addList, getLists } from "./barrel";

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

// ______________________ADD TODO FORM_____________________
let today = format(new Date(), "yyyy-MM-dd");
let addTodoForm;
export function createAddTodoForm() {
   const lists = getLists();
   const dropdownElement = createDropdownFromLists(lists, {
      id: "todoListsDropdown",
      name: "listId",
   });
   const todoFormConfig = {
      formId: "add-todo",
      inputs: [
         { type: "text", id: "title", name: "title", placeholder: "Title" },
         {
            type: "textarea",
            id: "description",
            name: "description",
            placeholder: "Description",
            rows: 5,
            cols: 10,
         },
         { type: "date", id: "date", name: "dueDate", min: today },
      ],
      priority: true,
      dropdownElement,
      submitText: "Add Todo",
   };
   createPopupForm(todoFormConfig);
   addTodoForm = document.querySelector("#add-todo-form");
   listenForm(addTodoForm, createTodo);
}

// ___________________ CREATE EDIT TODO FORM _________________________

let editTodoForm;
export function createEditTodoForm(todo) {
   const { title, description, dueDate, } = todo;

   const editTodoListId = todo.listId;
   const  editTodoPrioValue = todo.priority;
   const lists = getLists();
   const dropdownElement = createDropdownFromLists(
      lists,
      {
         id: "editTodoListDropdown",
         name: "listId",
      },
      editTodoListId,
   );
   const editTodoFormConfig = {
      formId: "editTodo",
      inputs: [
         {
            type: "text",
            id: "title",
            name: "title",
            placeholder: "Title",
            value: title,
         },
         {
            type: "textarea",
            id: "description",
            name: "description",
            placeholder: "Description",
            rows: 5,
            cols: 10,
            value: description,
         },
         {
            type: "date",
            id: "date",
            name: "dueDate",
            min: today,
            value: dueDate,
         },
      ],
      prioritySelected: editTodoPrioValue,
      priority: true,

      dropdownElement,
      submitText: "Edit Todo",
   };
   createPopupForm(editTodoFormConfig);
   editTodoForm = document.querySelector("#todo-form");
   listenForm(editTodoForm, updateTodo);
}

const addNewBtn = document.querySelector(".fa-plus");
addNewBtn.addEventListener("click", createAddTodoForm);

export function createDropdownFromLists(
   lists,
   dropdownConfig = {},
   editTodoListId,
) {
   if (!Array.isArray(lists) || lists.length === 0) {
      console.warn("No valid lists provided to create dropdown.");
      return null; // Return null if lists are invalid
   }

   const dropdown = document.createElement("select");
   dropdown.id = dropdownConfig.id || "dynamicDropdown";
   dropdown.name = dropdownConfig.name || "listDropdown";

   if (!editTodoListId) {
      // Create a default placeholder option
      const placeholderOption = document.createElement("option");
      placeholderOption.disabled = true; // not selectable
      placeholderOption.selected = true; // show by default
      placeholderOption.hidden = true; // hidden once opened
      placeholderOption.value = "";
      placeholderOption.textContent = "Select";
      dropdown.appendChild(placeholderOption);
   }

   lists.forEach((list) => {
      if (list.id === editTodoListId) {
         const placeholderOption = document.createElement("option");
         placeholderOption.selected = true;
         placeholderOption.value = list.id || list.title;
         placeholderOption.textContent = list.title || list.id;
         dropdown.appendChild(placeholderOption);
         return placeholderOption;
      }
   });

   lists.forEach((list) => {
      const optionElement = document.createElement("option");
      optionElement.value = list.id || list.title; // Use `id` or `name` for value
      optionElement.textContent = list.title || list; // Use the name or fallback to raw list item
      dropdown.appendChild(optionElement);
   });
   return dropdown;
}
