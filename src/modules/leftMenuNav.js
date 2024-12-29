import { getLists } from "./lists";

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
// const addProjectAnchor = document.createElement("a");
const projectsIcon = document.createElement("i");
const displayMenuIcon = document.createElement("i");

projectsIcon.classList.add("fa-solid", "fa-folder-plus");
displayMenuIcon.classList.add("fa-solid", "fa-angle-down");
displayMenuIcon.id = "display-menu";
projectsList.id = "project-list";
// addProjectAnchor.id = "add-project-anchor";
// addProjectAnchor.appendChild(displayMenuIcon);
projectsList.append(projectsIcon, "Lists", displayMenuIcon);
// projectsList.appendChild(addProjectAnchor);

ul.appendChild(projectsList);
nav.appendChild(ul);