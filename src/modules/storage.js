import { todos } from "./todos";

function sendTodoToDB(todos) { // Will implement an error handler for this function.
   localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosfromDB() { // Will implement an error handler for this function.
   const getTodos = localStorage.getItem("todos");
   let returnedTodosObj =  getTodos ? JSON.parse(getTodos) : [];
   todos.splice(0, todos.length, ...returnedTodosObj);
}

export const manageDB = function (conditional, todos) {
   if (conditional) {
      sendTodoToDB(todos);
   } else {
      getTodosfromDB();
   }
}