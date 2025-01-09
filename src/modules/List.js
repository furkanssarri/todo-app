import { IDGenerator } from "./barrel";
import { getTodos } from "./barrel";

export class List {
   constructor(title, description) {
      this._id = IDGenerator.generate();
      this._title = title;
      this._description = description;
   }

   get id(){
      return this._id;
   }
   get title() {
      return this._title;
   }
   set title(value) {
      this._title = value;
   }
   get description() {
      return this._description;
   }
   set description(value) {
      this._description = value;
   }
   filterTodos() {
      const todos = getTodos();
      return todos.filter(todo => todo.listId === this.id);
   }

   static fromJSON(data){
      const list = new List(data._title, data._description,);
      list._id = data._id;
      return list;
   }
}