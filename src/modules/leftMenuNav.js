import { displayLists } from "./displayLists";

export const nav = document.createElement("nav");
const ul = document.createElement("ul");

const tabs = ["Today", "This Week", "This Month"];
const tabIcons = ["calendar-day", "calendar-week", "calendar-days"];

tabs.forEach((tab, index) => {
   const li = document.createElement("li");
   const a = document.createElement("a");

   const icon = tabIcons[index];
   const iconTag = document.createElement("i");
   iconTag.classList.add("fa-solid", `fa-${icon}`);
   a.append(iconTag, tab); 

   li.appendChild(a);
   ul.appendChild(li);
});

const projectsList = document.createElement("li");

const projectsLiSpan = document.createElement("span");
const projectsLiContainer = document.createElement("div");

projectsLiContainer.classList.add("projects-list-container");
projectsLiSpan.textContent = "Lists";

const projectsIcon = document.createElement("i");
export const toggleMenuBtn = document.createElement("i");

projectsIcon.classList.add("fa-solid", "fa-folder-plus");
toggleMenuBtn.classList.add("fa-solid", "fa-angle-up");
toggleMenuBtn.id = "toggle-menu";
projectsList.id = "project-list";

projectsLiSpan.prepend(projectsIcon);
projectsLiSpan.appendChild(toggleMenuBtn);
projectsLiContainer.append(projectsLiSpan);

projectsList.appendChild(projectsLiContainer)

ul.appendChild(projectsList);
nav.appendChild(ul);
displayLists();