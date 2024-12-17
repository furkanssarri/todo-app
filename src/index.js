import "./style.css";
import 'animate.css'

import createPopupForm from "./modules/createForm";
import {logic} from "./modules/logic";
import { mainArea } from "./modules/renderModule"

const addNewBtn = document.querySelector(".fa-plus");
addNewBtn.addEventListener("click", createPopupForm)

// document.body.appendChild(form);



logic();

