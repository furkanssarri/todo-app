import { getLists } from "./lists";
import { makeTextDashCase, createDynamicList } from "./utility";
import { displayTabs, nav } from "./leftMenuNav";

function getLastItem() {
   return nav.firstElementChild.lastElementChild.firstElementChild;
}

export function displayLists() {
   const lists = getLists();

   const itemGenerator = (list) => {
      const li = document.createElement("li");
      const anchorTag = document.createElement("a");
      const iconTag = document.createElement("i");

      iconTag.classList.add("fa-solid", "fa-folder-open");
      const listName = makeTextDashCase(list.title);

      anchorTag.append(iconTag, listName);
      li.appendChild(anchorTag);

      return li;
   };

   // Additional "New List" element
   const addProjectLi = document.createElement("li");
   const addProjectAnchor = document.createElement("a");
   const addProjectIcon = document.createElement("i");

   addProjectIcon.classList.add("fa-solid", "fa-plus");
   addProjectAnchor.append(addProjectIcon, "New List");
   addProjectLi.appendChild(addProjectAnchor);

   const subUl = createDynamicList({
      data: lists,
      containerId: "sub-ul",
      containerClass: ["visible"],
      itemGenerator,
      additionalElements: [addProjectLi],
   });

   const lastLiContainer = getLastItem();
   lastLiContainer.appendChild(subUl);
}

setTimeout(() => {

   displayTabs();
   const toggleMenuButton = document.querySelector("#toggle-menu");
   const projectSubList = document.querySelector("#sub-ul");
   

   toggleMenuButton.addEventListener("click", () => {
      if (projectSubList.classList.contains("collapsed")) {
         projectSubList.style.height = `${projectSubList.scrollHeight}px`; // Explicitly set height for transition
         projectSubList.classList.remove("collapsed");
         projectSubList.classList.add("expanded");
         toggleMenuButton.classList.remove("fa-angle-down");
         toggleMenuButton.classList.add("fa-angle-up");
         // Wait for the transition to complete, then reset inline styles
         setTimeout(() => {
            projectSubList.style.height = "auto"; // Reset height to auto after expansion
         }, 300); // Match the CSS transition duration
      } else {
         projectSubList.style.height = `${projectSubList.scrollHeight}px`; // Set current height for smooth collapse
         
         // Force reflow to apply height change
         requestAnimationFrame(() => {
            projectSubList.style.height = "0"; // Collapse the menu
         });

         projectSubList.classList.remove("expanded");
         projectSubList.classList.add("collapsed");
         toggleMenuButton.classList.remove("fa-angle-up");
         toggleMenuButton.classList.add("fa-angle-down")
      }
   });
}, 90);
