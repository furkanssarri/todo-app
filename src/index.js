import "./style.css";
import 'animate.css';
/* A global namespace check is in order for the project- An easy way would be to check the window object
on the browser console. */

import createPopupForm from "./modules/createForm";
import {logic} from "./modules/logic";
import { mainArea } from "./modules/renderModule"

const addNewBtn = document.querySelector(".fa-plus");
addNewBtn.addEventListener("click", createPopupForm)

// document.body.appendChild(form);

// logic();

