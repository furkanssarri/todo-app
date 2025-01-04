import { renderLists } from "./render";
import { createDynamicList } from "./utility";

const hamburger = document.querySelector(".fa-bars");
export const leftMenu = document.createElement("div");

hamburger.addEventListener("click", () => {
   toggleLeftMenu();
});

document.addEventListener("click", (event) => {
   if (!leftMenu.contains(event.target) && !hamburger.contains(event.target) && leftMenu.classList.contains("show")) {
      closeLeftMenu();
   }
});

const toggleLeftMenu = () => {
   if (leftMenu.classList.contains("hide")) {
      leftMenu.classList.remove("animate__slideOutLeft");
      leftMenu.classList.add("animate__slideInLeft");
      leftMenu.classList.remove("hide");
      leftMenu.classList.add("show");
   } else {
      closeLeftMenu();
   }
};

const closeLeftMenu = () => {
   leftMenu.classList.remove("animate__slideInLeft");
   leftMenu.classList.add("animate__slideOutLeft");
   setTimeout(() => {
      leftMenu.classList.remove("show");
      leftMenu.classList.add("hide");
   }, 850);
};

leftMenu.classList.add("left-menu", "hide", "animate__animated");

//____________________ NAVBAR____________________________

export const nav = document.createElement("nav");

export function renderTabs() {
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

   renderLists();

   return toggleMenuBtn;
}