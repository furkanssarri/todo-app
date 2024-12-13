export default class Todo {
   constructor(_title, _description, _dueDate, _priority, _notes, _isComplete) {
      this.title = _title;
      this.description = _description;
      this.dueDate = _dueDate;
      this.priority = _priority;
      this.notes = _notes;
      this.isComplete = _isComplete
   }
   get info() {
      return `Title: ${this.title}, due time: ${this.dueDate},`;
   }
}
