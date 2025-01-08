import "./style.css";
import 'animate.css';

import { createAddTodoForm } from "./modules/createForm";
import { render } from "./modules/render";

/* A global namespace check is in order for the project- An easy way would be to check the window object
on the browser console. */
render();
const addNewBtn = document.querySelector(".fa-plus");
addNewBtn.addEventListener("click", createAddTodoForm);