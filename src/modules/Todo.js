import { v4 as uuidv4 } from "uuid";

export default class Todo {
   constructor(title, description, dueDate, priority, notes, isComplete) {
      this._id = _getID();
      this._title = title;
      this._description = description;
      this._dueDate = dueDate;
      this._priority = priority;
      this._notes = notes;
      this._isComplete = isComplete;
      // this._props = { title, description, dueDate, priority, notes, isComplete };

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
   get dueDate() {
      return this._dueDate;
   }
   set dueDate(value) {
      this._dueDate = value;
   }
   get priority() {
      return this._priority;
   }
   set priority(value) {
      this._priority = value;
   }
   get notes() {
      return this._notes;
   }
   set notes(value) {
      this._notes = value;
   }
   get status() {
      return this._isComplete;
   }
   set status(booleanValue) {
      this._isComplete = booleanValue;
   }
   static fromJSON(data){
      return new Todo(data._title, data._description, data._dueDate, data._priority, data._notes, data._isComplete);
   }
}

function _getID() {
   return uuidv4();
}