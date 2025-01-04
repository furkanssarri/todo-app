import IDGenerator from "./utility";

export default class List {
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

   static fromJSON(data){
      return new List(data._title, data._description,);
   }
}