import findToDo from "../../findToDo";
import { editCheckList } from "../../updateToDo";
import { addEventToChecklistForm, CheckList, renderTask } from "../createTask";
import { mainContent, State } from "../mainPage";

export const checkListTemplate = `
        <div id="task-checklist-container">
            <h1>Create Checklist for this task</h1>
            <input type="text"
                name="task name input"
                placeholder="write checklist"
                type="text"
                id="create-checklist-input"
                >
            <button id="add-checklist-btn">Add Checklist</button>
            <div id="checklist-items-container">
                
            </div>
        </div>
    `;

export function createChecklistPage(todoId) {
    console.log(State.currentProject, todoId)
  const todoIndex = findToDo(State.currentProject.list, todoId);
  const todo = State.currentProject.list[todoIndex];
  const checkList = todo.checkLists;
  const pageTemplate = `
        <div id="create-checklist-page-container">
            <h1 id="create-checklist-page-title">
                Create checklist items for ${todo.title} task
            </h1>
            <hr>
            ${checkListTemplate}
            <button id="create-checklist-item-btn">Create Checklist</button>
        </div>
    `;
  mainContent(pageTemplate);
  addEventToChecklistForm();
  const createCheckListBtn = document.getElementById(
    "create-checklist-item-btn",
  );
  createCheckListBtn.addEventListener("click", () => {
    const newChecklist = [...checkList, ...CheckList.checkList];
    editCheckList(todo, newChecklist);
    CheckList.resetList();
    renderTask(State.currentProject.id, todo.id);
  });
}
