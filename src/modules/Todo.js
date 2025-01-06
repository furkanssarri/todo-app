import IDGenerator from "./utility";

export default class Todo {
   constructor(title, description, dueDate, priority, listId, isComplete,) {
      this._id = IDGenerator.generate();
      this._title = title;
      this._description = description;
      this._dueDate = dueDate;
      this._priority = priority;
      this._listId = listId;
      this._isComplete = isComplete;
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
   get listId() {
      return this._listId;
   }
   set listId(value) {
      this._listId.push(value);
   }
   get status() {
      return this._isComplete;
   }
   set status(booleanValue) {
      this._isComplete = booleanValue;
   }
   static fromJSON(data){
      return new Todo(data._title, data._description, data._dueDate, data._priority, data._listId,  data._isComplete,);
   }
}

