import { manageDB, renderTodos, Todo } from "./barrel";
import { List } from "./barrel";

const _todos = [];
const _lists = [];
const _systemDefaultLists = [
   {
      id: "inbox",
      title: "Inbox",
      description: "All Todos Inbox",
      icon: "inbox",
      filterTodos: () => filterTodos(() => true),
   },
   {
      id: "today",
      title: "Today",
      description: "Todos due today.",
      icon: "calendar-day",
      filterTodos: () => {
         return filterTodos(
            (todo) =>
               new Date(todo._dueDate).toDateString() ===
               new Date().toDateString(),
         );
      },
   },
   {
      id: "thisWeek",
      title: "This Week",
      description: "Todos due this week.",
      icon: "calendar-week",
      filterTodos: () => {
         const today = new Date();
         const weekStart = new Date(
            today.setDate(today.getDate() - today.getDay()),
         );
         const weekEnd = new Date(weekStart);
         weekEnd.setDate(weekStart.getDate() + 6);

         return filterTodos((todo) => {
            const dueDate = new Date(todo._dueDate);
            return dueDate >= weekStart && dueDate <= weekEnd;
         });
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

export function removeTodo(rmTodo) {
   const index = _todos.findIndex(todo => todo.id === rmTodo.id);
   _todos.splice(index, 1);
   manageDB(true, "todos", _todos);
   renderTodos(getTodos());
}

export function spliceTodos(returnedTodosObj) {
   _todos.splice(0, _todos.length, ...returnedTodosObj); // MIGHT NEED TO REWORK THIS | to send the Todo to the DB
}

export function updateTodo(updatedTodo) {
   // console.log(updatedTodo)
   if (
      !updatedTodo.id ||
      typeof updatedTodo.title !== "string" ||
      (updatedTodo.dueDate instanceof Date && !iNaN(updatedTodo.dueDate)) ||
      !updatedTodo.priority
   ) {
      console.error("Invalid updatedTodo: ", updatedTodo);
      return;
   }

   const index = _todos.findIndex((todo) => todo.id === updateTodo.id);
   if (index !== -1) {
      const newTodo = Todo.fromJSON(updatedTodo);
      _todos[index] = newTodo;
      manageDB(true, "todos", getTodos());
      renderTodos(getTodos());
   } else {
      console.warn(`Todo with id ${updatedTodo.id} not found.`);
   }
}

function filterTodos(condition) {
   const todos = getTodos();
   const filtered = todos.filter(condition);
   return filtered;
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
   // _lists.splice(0, _lists.length, ...returnedListObj); // to add the returned lists from DB to the array
   const storedLists = returnedListObj;
   storedLists.forEach((listData) => {
      const list = List.fromJSON(listData);
      _lists.push(list);
   });
}

export function updateList(updatedList) {
   const index = _lists.findIndex((list) => list.id === updateList.id);
   if (index !== -1) {
      _lists[index] = updatedList;
      //send to storage
   }
}

export function getSystemDefaultLists() {
   return [..._systemDefaultLists];
}
