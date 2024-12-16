// import { container } from "webpack";
import getInfo from "./createTodo";

const formElements = {};

export default function createPopUpForm() {
   // Overlay and Container
   const overlay = document.createElement("div");
   const formContainer = document.createElement("div");

   overlay.classList.add("form-overlay") //, "animate__animated", "animate__animated", "animate__zoomIn");
   formContainer.classList.add("form-container");
   

   // Close Button
   const formCloseBtn = document.createElement("button");
   const closeFa = document.createElement("i");
   closeFa.classList.add("fa-solid", "fa-xmark");

   
   

   // Form and inputs
   const form = document.createElement("form");
   const titleInput = document.createElement("input");
   const dateInput = document.createElement("input");
   const descriptionInput = document.createElement("input");
   const priorityStatus = document.createElement("select");
   const prioLow = document.createElement("option");
   const prioMed = document.createElement("option");
   const prioHigh = document.createElement("option");
   const noteInput = document.createElement("input");
   const submitBtn = document.createElement("button");

   titleInput.setAttribute("placeholder", "Title");
   dateInput.setAttribute("placeholder", "Date");
   descriptionInput.setAttribute("placeholder", "Description");
   noteInput.setAttribute("placeholder", "Notes");

   submitBtn.id = "submit-btn";
   dateInput.id = "date-input";
   titleInput.id = "title-input";
   descriptionInput.id = "description-input";
   priorityStatus.id = "priority-status";
   noteInput.id = "notes-input";

   prioLow.setAttribute("value", "Low");
   prioMed.setAttribute("value", "Medium");
   prioHigh.setAttribute("value", "High");

   prioLow.textContent = "Low";
   prioMed.textContent = "Medium";
   prioHigh.textContent = "High";

   priorityStatus.appendChild(prioLow);
   priorityStatus.appendChild(prioMed);
   priorityStatus.appendChild(prioHigh);

   submitBtn.textContent = "Submit";
   submitBtn.classList.add("submit-button");
   submitBtn.type = "submit";

   formElements.titleInput = titleInput;
   formElements.descriptionInput = descriptionInput;
   formElements.dateInput = dateInput;
   formElements.priorityStatus = priorityStatus;
   formElements.noteInput = noteInput;

   form.appendChild(titleInput);
   form.appendChild(descriptionInput);
   form.appendChild(dateInput);
   form.appendChild(priorityStatus);
   form.appendChild(noteInput);
   form.appendChild(submitBtn);

   formCloseBtn.appendChild(closeFa);
   formContainer.appendChild(formCloseBtn);
   formContainer.appendChild(form);
   overlay.appendChild(formContainer);

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      getInfo();
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => {
         input.value = "";
      });
   });

   document.body.appendChild(overlay);

   // formCloseBtn.onclick = () => document.body.removeChild(overlay);
   overlay.addEventListener("click", removeForm);
   function removeForm(e) {
      if (e.target.classList.contains("form-overlay") || e.target.classList.contains("fa-xmark")) {
         document.body.removeChild(overlay)
      }
   }
}



export { formElements };


