import { editToDoCheckListItems } from "../updateToDo.js";
import {State} from './mainPage.js'

export function addEventToCheckbox() {
  const allCheckboxInputs = document.querySelectorAll(
    ".checklist-checkbox-item",
  );
  allCheckboxInputs.forEach((element) =>
    element.addEventListener("click", () => {
      editToDoCheckListItems( 
        State.currentProject.id,
        element.dataset.taskid,
        element.parentElement.parentElement.id,
      );
    }),
  );
}
