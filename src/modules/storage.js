import { todos } from "./todos";

function sendTodoToDB(todos) {
   localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosfromDB() {
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