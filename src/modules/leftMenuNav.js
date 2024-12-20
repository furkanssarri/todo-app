import { getTodos } from "./todos";

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
const projectsAnchor = document.createElement("a");
const projectsIcon = document.createElement("i");

projectsIcon.classList.add("fa-solid", "fa-table-list");
projectsAnchor.append(projectsIcon, "Lists");
projectsList.appendChild(projectsAnchor);

ul.appendChild(projectsList);
nav.appendChild(ul);