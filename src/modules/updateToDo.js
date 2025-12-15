import find from "./find";
import saveToLocalStorage from './saveProjects'

// title, description, dueDate, priority, notes, checkLists,
export function editToDoTitle(projectId, toDoId, title) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].title = title;
  saveToLocalStorage();
}

export function editToDoDescription(projectId, toDoId, description) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].description = description;
  saveToLocalStorage();
}

export function editToDoDueDate(projectId, toDoId, dueDate) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].dueDate = dueDate;
  saveToLocalStorage();
}

export function editToDoPriority(projectId, toDoId, priority) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].priority = priority;
  saveToLocalStorage();
}

export function editToDoNotes(projectId, toDoId, notes) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].notes = notes;
  saveToLocalStorage();
}

export function editToDoCheckLists(projectId, toDoId, checkList) {
  const { project, toDoIndex } = find(projectId, toDoId);
  project.list[toDoIndex].checkLists = checkList;
  saveToLocalStorage();
}
