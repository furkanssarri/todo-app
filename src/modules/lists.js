const lists = [];


export function getLists() {
   return [...lists];
}

export function addList(newList) {
   lists.push(newList);
}

export function removeList(index) {
   lists.splice(index, 1);
}

export function spliceLists(returnedListObj) {
   lists.splice(0, lists.length, ...returnedListObj); // to add the returned lists from DB to the array
}