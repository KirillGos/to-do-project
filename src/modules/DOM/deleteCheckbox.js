import findChecklist from "../findChecklist";
import findToDo from "../findToDo";
import saveToLocalStorage from "../saveProjects";
import { State } from "./mainPage";

export function addEventToDeleteCheckbox() {
  const allDeleteCheckListItems = document.querySelectorAll(
    ".delete-checklist-item-btn",
  );
  allDeleteCheckListItems.forEach((btn) => {
    btn.addEventListener("click", deleteCheckListAction);
  });
}

export function deleteCheckListAction(e) {
  const todoIndex = findToDo(
    State.currentProject.list,
    e.target.dataset.taskid,
  );
  const todo = State.currentProject.list[todoIndex];
  const checkList = todo.checkLists;
  const deleteItemIndex = findChecklist(checkList, e.target.parentElement.id);
  checkList.splice(deleteItemIndex, 1);

  e.target.parentElement.remove();
  saveToLocalStorage();
}
