import { getLists } from "./lists";
import { makeTextDashCase } from "./displayTodos";
import { nav } from "./leftMenuNav";

function getLastItem() {
   return nav.firstElementChild.lastElementChild;
}

export function displayLists() {
   const lists = getLists();
   const subUl = document.createElement("ul");

   lists.forEach((list, index) => {
      const listItem = document.createElement("li");
      const anchorTag = document.createElement("a");
      const iconTag = document.createElement("i");
      iconTag.classList.add("fa-solid", "fa-folder-open");

      const listName = makeTextDashCase(list.title);
      anchorTag.append(iconTag, listName);
      listItem.appendChild(anchorTag);
      subUl.appendChild(listItem);
   });

   const addProjectLi = document.createElement("li");
   const addProjectAnchor = document.createElement("a");
   const addProjectIcon = document.createElement("i");

   addProjectIcon.classList.add("fa-solid", "fa-plus");
   addProjectLi.id = "add-project";

   addProjectAnchor.append(addProjectIcon, "New List");
   addProjectLi.appendChild(addProjectAnchor);
   subUl.appendChild(addProjectLi);

   lastLi.appendChild(subUl);
}

const lastLi = getLastItem();

