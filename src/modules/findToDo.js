export default function findToDo(toDoList, toDoId) {
  let index = null;
  toDoList.forEach((toDo, i) => {
    if (toDo.id === toDoId) {
      index = i;
    }
  });
  return index;
}