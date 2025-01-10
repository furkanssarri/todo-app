import { Todo } from "./barrel";
import { List } from "./barrel";
import { manageDB } from "./barrel";
import { addTodo, getTodos, addList, getLists } from "./barrel";

export function createTodo(todoData) { 
   const { title, description, dueDate, priority, listId } = todoData;
   const isComplete = false;
   console.log(todoData.listId)
   
   const newTodo = new Todo(title, description, dueDate, priority, listId, isComplete,);

   addTodo(newTodo);

   if (!newTodo) {
      return;
   } else {
      manageDB(true, "todos", getTodos());
   }
}



export function createList(listData) {
   const { title,  description } = listData;   
   const newList = new List(title, description);

   addList(newList);

   if (!newList) {
      return;
   } else {
      manageDB(true, "lists", getLists());
   }
}

