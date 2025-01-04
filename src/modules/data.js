import Todo from "./Todo";
import List from "./List";

const _todos = [];
const _lists = [];
const _defaultLists = [
   {
      id: "today",
      title: "Today",
      description: "Todos due today.",
      filter: (todo) =>
         new Date(todo.dueDate).toDateString() === new Date().toDateString(),
   },
   {
      id: "thisWeek",
      title: "This Week",
      description: "Todos due this week.",
      filter: (todo) => {
         const today = new Date();
         const weekStart = new Date(
            today.setDate(today.getDate() - today.getDay()),
         );
         const weekEnd = new Date(weekStart);
         weekEnd.setDate(weekStart.getDate() + 6);
         return todo.dueDate >= weekStart && todo.dueDate <= weekEnd;
      },
   },
   {
      id: "thisMonth",
      title: "This Month",
      description: "Todos due this month.",
      filter: (todo) => {
         const today = new Date();
         const todoDate = new Date(todo.dueDate);

         return (
            todoDate.getFullYear() === today.getFullYear() &&
            todoDate.getMonth() === today.getMonth()
         );
      },
   },
];

// TODOS
export function getTodos() {
   return [..._todos.map((todo) => Todo.fromJSON(todo))]; // Rehydrate and return a copy to prevent direct mutation
}

export function addTodo(todo) {
   _todos.push(todo);
}

export function removeTodo(index) {
   _todos.splice(index, 1);
}

export function spliceTodos(returnedTodosObj) {
   // to send the Todo to the DB
   _todos.splice(0, _todos.length, ...returnedTodosObj);
}

// LISTS
export function getLists() {
   return [..._lists.map((list) => List.fromJSON(list))]; // Rehydrate and return a copy
}

export function addList(newList) {
   _lists.push(newList);
}

export function removeList(index) {
   _lists.splice(index, 1);
}

export function spliceLists(returnedListObj) {
   _lists.splice(0, _lists.length, ...returnedListObj); // to add the returned lists from DB to the array
}

export function updateList(updatedList) {
   const index = _lists.findIndex((list) => list.id === updateList.id);
   if (index !== -1) {
      lists[index] = updatedList;
      //send to storage
   }
}
