import { getTodos } from "./todos";
import { manageDB } from "./storage";
import { nav } from "./leftMenuNav";
import { leftMenu } from "./leftMenu";
import { displayTodos } from "./displayTodos";

/*This render module is very sloppy and is violating some of the important best practices suc as DRY and
more importantly, the Single Responsibility principle. A refactor is in order for this module in the future. */

export const mainArea = document.querySelector("main");

mainArea.appendChild(leftMenu);

export const container = document.createElement("div");

container.classList.add("container");

mainArea.appendChild(container);

window.addEventListener("load", getTodosFromStorage);

function getTodosFromStorage() {
   manageDB(false, getTodos);
   displayTodos();
}

leftMenu.appendChild(nav)