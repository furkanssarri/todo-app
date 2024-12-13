function sendTodoToDB(todos) {
   localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosfromDB() {
   const getTodos = localStorage.getItem("todos");
   todos.push(getTodos);
   return getTodos ? JSON.parse(getTodos) : [];
}

export const manageDB = function (conditional, todos) {
   if (conditional) {
      sendTodoToDB(todos);
   } else {
      getTodosfromDB();
   }
}