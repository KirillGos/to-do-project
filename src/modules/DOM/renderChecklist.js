import { addEventToCheckbox } from "./checkboxEvent";
import { addEventToDeleteCheckbox } from "./deleteCheckbox";

export function renderCheckList(checkList, checkListContainer) {
  checkListContainer.innerHTML = "";
  checkList.forEach((item) => {
    checkListContainer.insertAdjacentHTML(
      "beforeend",
      `
            <div class="check-list-item" id="${item.id}">
                <div class="checklist-style">
                <input type="checkbox" class="checklist-checkbox-item" data-taskid="${checkListContainer.dataset.taskid}" ${item.status ? "checked" : ""}>${item.title}
                </div>
                <span class="delete-checklist-item-btn"  data-taskid="${checkListContainer.dataset.taskid}">❌</span>
            </div>
        `,
    );
  });
  if (checkListContainer.childElementCount == 0) {
    checkListContainer.innerHTML = `<span style='color=rgba(97, 87, 87, 0.43);'>No checklist items here. Go to the task to create checklist items</span>`;
  }
}
