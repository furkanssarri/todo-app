import { format } from "date-fns";
import getInfo from "./createTodo";

/* This module is sloppy and is violating some of the important best practices such as DRY and Single responsibility.
A look back -and potentially a refactor- is in order for this module in the future.

Additionally an encapsulation is in order for the formElements here to improve security.

Also an event listener management is in order to improve security.

And lastly, a form validation is in order.
*/

const formElements = {};

export default function createPopupForm() {
   // Overlay and Container
   const overlay = document.createElement("div");
   const formContainer = document.createElement("div");

   overlay.id = "formOverlay";
   overlay.classList.add("form-overlay"); //, "animate__animated", "animate__animated", "animate__zoomIn");
   formContainer.classList.add("form-container");
   formContainer.id = "formContainer";

   // Close Button
   const formCloseBtn = document.createElement("button");
   const closeFa = document.createElement("i");
   closeFa.classList.add("fa-solid", "fa-xmark");
   formCloseBtn.classList.add("close-btn");

   // Form and inputs
   const form = document.createElement("form");
   const titleInput = document.createElement("input");
   const dateInput = document.createElement("input");
   const descriptionInput = document.createElement("input");
   const noteInput = document.createElement("input");
   const submitBtn = document.createElement("button");

   // Priority Status wrapper container
   const prioWrapper = document.createElement("div");
   prioWrapper.id = "priorityStatusContainer";

   // Priority Status Label
   const prioStatusLabel = document.createElement("p");

   // Priority Status Label Attributes
   prioStatusLabel.textContent = "Priority:";

   const priorities = ["Low", "Medium", "High"];

   const priorityContainer = document.createElement("div");
   priorityContainer.classList.add("priority-options");

   priorities.forEach((priority) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.id = priority.toLowerCase();
      input.name = "priorityStatus";
      input.value = priority;

      const label = document.createElement("label");
      label.htmlFor = input.id;
      label.textContent = priority;
      label.classList.add("priority-option", priority.toLowerCase());

      priorityContainer.appendChild(input);
      priorityContainer.appendChild(label);
   });

   prioWrapper.appendChild(prioStatusLabel);
   prioWrapper.appendChild(priorityContainer);

   let today = format(new Date(), "yyyy-MM-dd");
   titleInput.setAttribute("placeholder", "Title");
   dateInput.setAttribute("placeholder", "Date");
   dateInput.setAttribute("type", "date");
   dateInput.setAttribute("min", today);
   descriptionInput.setAttribute("placeholder", "Description");
   noteInput.setAttribute("placeholder", "Notes");

   submitBtn.id = "submit-btn";
   dateInput.id = "date-input";
   titleInput.id = "title-input";
   descriptionInput.id = "description-input";
   noteInput.id = "notes-input";

   submitBtn.textContent = "Submit";
   submitBtn.classList.add("submit-button");
   submitBtn.type = "submit";

   formElements.titleInput = titleInput;
   formElements.descriptionInput = descriptionInput;
   formElements.dateInput = dateInput;
   formElements.getPriorityStatus = () => {
      const selectedPriority = Array.from(
         document.getElementsByName("priorityStatus"),
      ).find((radio) => radio.checked);
      return selectedPriority ? selectedPriority.value : null;
   };
   formElements.noteInput = noteInput;

   form.appendChild(titleInput);
   form.appendChild(descriptionInput);
   form.appendChild(dateInput);
   form.appendChild(prioWrapper);
   form.appendChild(noteInput);
   form.appendChild(submitBtn);

   formCloseBtn.appendChild(closeFa);
   formContainer.appendChild(formCloseBtn);
   formContainer.appendChild(form);
   overlay.appendChild(formContainer);

   form.addEventListener("submit", () => {
      getInfo();
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => {
         input.value = "";
      });
   });

   document.body.appendChild(overlay);

   overlay.addEventListener("click", removeForm);
   function removeForm(e) {
      if (
         e.target.classList.contains("form-overlay") ||
         e.target.classList.contains("fa-xmark")
      ) {
         document.body.removeChild(overlay);
      }
   }
}

export { formElements };
