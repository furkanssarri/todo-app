import { displayLists } from "./displayLists";
import { createDynamicList } from "./utility";

export const nav = document.createElement("nav");

export function displayTabs() {
   const tabs = ["Today", "This Week", "This Month"];
   const tabIcons = ["calendar-day", "calendar-week", "calendar-days"];

   const itemGenerator = (tab, index) => {
      const li = document.createElement("li");
      const anchorTag = document.createElement("a");
      const iconTag = document.createElement("i");

      iconTag.classList.add("fa-solid", `fa-${tabIcons[index]}`);
      anchorTag.append(iconTag, tab);
      li.appendChild(anchorTag);

      return li;
   };

   const projectsList = document.createElement("li");

   const projectsLiSpan = document.createElement("span");
   const projectsLiContainer = document.createElement("div");

   projectsLiContainer.classList.add("projects-list-container");
   projectsLiSpan.textContent = "Lists";

   const projectsIcon = document.createElement("i");
   const toggleMenuBtn = document.createElement("i");

   projectsIcon.classList.add("fa-solid", "fa-folder-plus");
   toggleMenuBtn.classList.add("fa-solid", "fa-angle-up");
   toggleMenuBtn.id = "toggle-menu";
   projectsList.id = "project-list";

   projectsLiSpan.prepend(projectsIcon);
   projectsLiSpan.appendChild(toggleMenuBtn);
   projectsLiContainer.append(projectsLiSpan);

   projectsList.appendChild(projectsLiContainer);

   const navUl = createDynamicList({
      data: tabs,
      containerId: null, // No ID for this list
      containerClass: [],
      itemGenerator,
   });

   navUl.appendChild(projectsList);
   nav.appendChild(navUl);

   displayLists();

   return toggleMenuBtn;
}