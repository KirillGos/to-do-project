import find from "./find";
import findChecklist from "./findChecklist";
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

export function editToDoCheckListItems(projectId, toDoId, itemId) {
  const infoObj = find(projectId, toDoId);
  const project = infoObj.project;
  const checkList = project.list[infoObj.toDoIndex].checkLists;
  
  const checkListItemIndex = findChecklist(checkList, itemId);
  const checkListItem = checkList[checkListItemIndex];
  
  checkListItem.status ? checkListItem.status = false : checkListItem.status = true;

  saveToLocalStorage();
}
