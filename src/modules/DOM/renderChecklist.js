import { addEventToCheckbox, addEventToDeleteCheckbox } from "./createProject";

export function renderCheckList(task, checkListContainer) { 
  checkListContainer.innerHTML = "";
  task.checkLists.forEach((item) => {
    if (checkListContainer.childElementCount < 5) {
      checkListContainer.insertAdjacentHTML(
        "beforeend",
        `
            <div class="check-list-item" id="${item.id}">
                <div class="checklist-style">
                <input type="checkbox" class="checklist-checkbox-item" data-taskid="${task.id}" ${item.status ? "checked" : ""}>${item.title}
                </div>
                <span class="delete-checklist-item-btn"  data-taskId="${task.id}">❌</span>
            </div>
        `,
      );
    }
  });
  addEventToDeleteCheckbox();
  addEventToCheckbox();
}
