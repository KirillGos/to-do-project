const todos = [];
const validTodo = {
    title: null,
    description: null,
    dueDate: null,
    priority: null,
    notes: null,
    checkLists: null,
} 
export class CreateToDo {
  constructor(title, description, dueDate, priority, notes, checkLists) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checkLists = checkLists;
    this.id = crypto.randomUUID();
    todos.push(this);
  }
  delete() {
    const index = findToDo(this);
    index !== null ? 
    todos.splice(index, 1) : null;
  }
  edit(property, value) {
    if(checkProperty(property)) {
        const index = findToDo(this);
        todos[index][`${property}`] = value;
    }
  }
}
function findToDo(todo) {
    let index = null;
    todos.forEach((item, i) => {
      if(item.id === todo.id) {
          index = i;
      }
    });
    return index;
}

function checkProperty(property) {
    const keys = Object.keys(validTodo);
    let result = null;
    keys.forEach(key => {
        if (key === property) {
            result = true;
        }
    });
    return result ? true : false; 
}