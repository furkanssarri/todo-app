export function convertChars(text) {
   const charMap = {
      ı: "i",
      ü: "u",
      ğ: "g",
      ç: "c",
      ö: "o",
      ş: "s",
   };

   return text.replace(/[ığçöşü]/g, (match) => charMap[match]);
}

export function makeTextDashCase(text) {
   return text.replace(/\s+/g, "-").toLowerCase();
}

/**
 * Formats a key to make it more readable.
 * - Handles camelCase by inserting spaces before uppercase letters.
 * - Removes underscores.
 * - Capitalizes the first letter.
 *
 * @param {string} text - The key to format.
 * @returns {string} - The formatted key.
 */
export function formatText(text) {
   return (
      text
         // Insert space before uppercase letters (for camelCase handling)
         .replace(/([a-z])([A-Z])/g, function (match, p1, p2) {
            return p1 + " " + p2; // Insert space between lowercase and uppercase letter
         })
         // Replace underscores with spaces
         .replace(/_/g, "")
         // Capitalize the first letter of the resulting string
         .replace(/^\w/, function (c) {
            return c.toUpperCase();
         })
   );
}

export function createDynamicList({
   data, // Array of items to be used (e.g., lists or tabs)
   containerId = null, // ID for the `<ul>` container
   containerClass = [], // Classes for the `<ul>` container
   itemGenerator, // A callback function to generate `<li>` contents
   additionalElements = [], // Optional additional elements to append
}) {
   const ul = document.createElement("ul");

   // Apply ID and classes if provided
   if (containerId) ul.id = containerId;
   if (containerClass.length) ul.classList.add(...containerClass);

   // Iterate over data and use itemGenerator to create `<li>` items
   data.forEach((item, index) => {
      const li = itemGenerator(item, index); // Generate `<li>` dynamically
      ul.appendChild(li);
   });

   // Append additional elements, if any
   additionalElements.forEach((element) => ul.appendChild(element));

   return ul;
}

export const IDGenerator = (() => {
   const { v4: uuidv4 } = require("uuid");
   function getID() {
      return uuidv4();
   }
   return {
      generate: getID,
   };
})();

export function createPopupForm(config) {
   // Overlay and Container
   const overlay = document.createElement("div");
   const formContainer = document.createElement("div");

   overlay.id = "formOverlay";
   overlay.classList.add("form-overlay");
   formContainer.id = "formContainer";

   // Close Button
   const formCloseBtn = document.createElement("button");
   const closeFa = document.createElement("i");
   closeFa.classList.add("fa-solid", "fa-xmark");
   formCloseBtn.classList.add("close-btn");
   formCloseBtn.appendChild(closeFa);
   document.addEventListener("click", (event) => {
      if (overlay.contains(event.target) && !formContainer.contains(event.target)) {
         document.body.removeChild(overlay);
      }
      if (formCloseBtn.contains(event.target)) {
         document.body.removeChild(overlay)
      }
   });
   document.addEventListener("keyup", (event) => {
      if (!document.body.contains(overlay)) {
         return;
      }
      if (event.key === "Escape") {
         document.body.removeChild(overlay)
      } else {
         return;
      }
   })

   // Form
   const form = document.createElement("form");
   form.id = `${config.formId.toLowerCase()}-form`;

   // Create inputs based on Config
   if (config && Array.isArray(config.inputs)) {
      config.inputs.forEach((inputConfig) => {
         let input;
         // Handle different input types
         if (inputConfig.type === "textarea") {
            // Create a textarea element
            input = document.createElement("textarea");
            if (inputConfig.rows) input.rows = inputConfig.rows;
            if (inputConfig.cols) input.cols = inputConfig.cols;
         } else {
            // Default to creating an input element
            input = document.createElement("input");
            input.type = inputConfig.type || "text";
         }
         input.id = `${inputConfig.id}-input`;
         input.name = inputConfig.name;
         input.placeholder = inputConfig.placeholder || "";

         if (inputConfig.value) input.value = inputConfig.value;
         form.appendChild(input);
      });
   } else {
      console.error("Invalid config or config.inputs is not an array");
   }

   if (config.prioritySelected) {
      var selectedPrio = config.prioritySelected;
   }


   // Priority Status Wrapper Container (if provided in the config)
   if (config.priority) {

      const prioWrapper = document.createElement("div");
      prioWrapper.id = "priorityStatusContainer";

      const prioStatusLabel = document.createElement("p");
      prioStatusLabel.textContent = "Priority";
      prioWrapper.appendChild(prioStatusLabel);

      const priorities = ["Low", "Medium", "High"];
      const priorityContainer = document.createElement("div");
      priorityContainer.classList.add("priority-options");

      
      
      priorities.forEach((priority) => {
         const input = document.createElement("input");
         input.type = "radio";
         input.id = priority.toLowerCase();
         input.name = "priority";
         input.value = priority;

         if (input.value === selectedPrio) {
            input.checked = true;
         }

         const label = document.createElement("label");
         label.htmlFor = input.id;
         label.textContent = priority;
         label.classList.add("priority-option", priority.toLowerCase());

         priorityContainer.appendChild(input);
         priorityContainer.appendChild(label);
      });

      prioWrapper.appendChild(priorityContainer);
      form.appendChild(prioWrapper);
   }

   // Append the dropdown element if provided
   if (config.dropdownElement) {
      const dropdownWrapper = document.createElement("div");
      dropdownWrapper.id = "dropdownContainer";

      const dropdownLabel = document.createElement("label");
      dropdownLabel.htmlFor = config.dropdownElement.id;
      dropdownLabel.textContent = "Select a List";

      dropdownWrapper.appendChild(dropdownLabel);
      dropdownWrapper.appendChild(config.dropdownElement);
      form.appendChild(dropdownWrapper);
   }

   // Submit Button
   const submitBtn = document.createElement("button");
   submitBtn.type = "submit";
   submitBtn.textContent = config.submitText || "Submit";
   form.appendChild(submitBtn);

   // Append form to container
   formContainer.appendChild(form);
   formContainer.appendChild(formCloseBtn);
   overlay.appendChild(formContainer);
   document.body.appendChild(overlay);
}

export function listenForm(form, callback) {
   if (form) {
      form.addEventListener("submit", (e) => {
         // e.preventDefault();
         if (typeof callback === "function") {
            const formData = new FormData(e.target);
            const userData = Object.fromEntries(formData.entries());
            callback(userData);
         } else {
            console.error("Provided callback is not a function.");
         }
         const inputs = form.querySelectorAll("input");
         inputs.forEach((input) => {
            input.value = "";
         });
      });
   } else {
      return;
   }
}
