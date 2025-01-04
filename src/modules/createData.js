import Todo from "./Todo";
import List from "./List";
import { manageDB } from "./storage";
import { addTodo, getTodos, addList, getLists } from "./data";

export function createTodo(todoData) { 
   const { title, description, dueDate, priority, notes, listId } = todoData;
   const isComplete = false;
   
   const newTodo = new Todo(title, description, dueDate, priority, notes, isComplete);

   addTodo(newTodo);

   if (!newTodo) {
      return;
   } else {
      manageDB(true, "todos", getTodos());
   }
}

export function createList(listData) {
   const { title,  description } = listData;

   // console.log(listData)
   
   const newList = new List(title, description);

   addList(newList);

   if (!newList) {
      return;
   } else {
      manageDB(true, "lists", getLists());
   }
}