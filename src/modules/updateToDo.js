import find from "./find";

// title, description, dueDate, priority, notes, checkLists,
export function editToDoTitle(projectId, toDoId, title) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].title = title;
}

export function editToDoDescription(projectId, toDoId, description) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].description = description;
}

export function editToDoDueDate(projectId, toDoId, dueDate) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].dueDate = dueDate;
}

export function editToDoPriority(projectId, toDoId, priority) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].priority = priority;
}

export function editToDoNotes(projectId, toDoId, notes) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].notes = notes;
}

export function editToDoCheckLists(projectId, toDoId, checkList) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].checkLists = checkList;
}
