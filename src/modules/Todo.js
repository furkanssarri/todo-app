import { v4 as uuidv4 } from "uuid";

export default class Todo {
   constructor(_title, _description, _dueDate, _priority, _notes, _isComplete) {
      this._id = _getID();
      this.description = _description;
      this.dueDate = _dueDate;
      this.title = _title;
      this.priority = _priority;
      this.notes = _notes;
      this.isComplete = _isComplete;
   }
   get id(){
      return this.id;
   }
   get info() {
      return `Title: ${this.title}, due time: ${this.dueDate},`;
   }
}

function _getID() {
   return uuidv4();
}

