import { addTodo, getTodos, spliceTodos } from "./todos";

/* A series of security checks and precautions are in order for storing todos perhaps even encryption? Nobody knows! */

function sendTodoToDB(getTodos) { // Will implement an error handler for this function.
   localStorage.setItem("todos", JSON.stringify(getTodos));
}

function getTodosfromDB() { // Will implement an error handler for this function.
   const getTodosFromStorage = localStorage.getItem("todos");
   let returnedTodosObj =  getTodosFromStorage ? JSON.parse(getTodosFromStorage) : [];
   spliceTodos(returnedTodosObj);
}

export const manageDB = function (conditional, todos) {
   if (conditional) {
      sendTodoToDB(todos);
   } else {
      getTodosfromDB();
   }
}