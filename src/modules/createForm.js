import getInfo from "./createTodo";

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

form.appendChild(titleInput);
form.appendChild(descriptionInput);
form.appendChild(dateInput);
form.appendChild(priorityStatus);
form.appendChild(noteInput);
form.appendChild(submitBtn);



form.addEventListener("submit", (e) => {
   e.preventDefault();
   getInfo();
   const inputs = form.querySelectorAll("input");
   inputs.forEach((input) => {
      input.value = "";
   });
});



export { form, titleInput, descriptionInput, dateInput, priorityStatus, noteInput };