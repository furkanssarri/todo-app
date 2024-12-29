import Todo from "./Todo";

let _todos = [];

export function getTodos() {
   return [..._todos.map(todo => Todo.fromJSON(todo))]; // Rehydrate and return a copy to prevent direct mutation
}

export function addTodo(todo) {
   _todos.push(todo);
}

export function removeTodo(index) {
   _todos.splice(index, 1);
}

export function spliceTodos(returnedTodosObj) { // to send the Todo to the DB
   _todos.splice(0, _todos.length, ...returnedTodosObj);
}

function rehydrateTodos(todoDataArray) {
   return todoDataArray.map(data => Todo.fromJSON(data));
}