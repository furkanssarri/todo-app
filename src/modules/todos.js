

let todos = [];

export function getTodos() {
  return [...todos]; // Return a copy to prevent direct mutation
}

export function addTodo(todo) {
   todos.push(todo);
}

export function removeTodo(index) {
   todos.splice(index, 1);
}

export function spliceTodos(returnedTodosObj) { // to send the Todo to the DB
   todos.splice(0, todos.length, ...returnedTodosObj);
}
