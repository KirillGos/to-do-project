import find from "../find";
import Project from "../projects";
import CreateToDo from "../todo";
import { mainContent, State } from "./mainPage";
import { createTaskTemplate } from "./HTML Modules/createTaskTemplate";
import { addEventToCheckbox, addEventToDeleteCheckbox, renderProject } from "./createProject";
import { editToDoCheckListItems } from "../updateToDo";
import { renderCheckList } from "./renderChecklist";

class CheckList {
  static checkList = [];
  constructor(id, title, status = false) {
    this.id = id;
    this.title = title;
    this.status = status;
    CheckList.checkList.push(this);
  }
  static resetList() {
    CheckList.checkList = [];
  }
}

function createTask() {
  const createCheckListBtn = document.getElementById("add-checklist-btn");

  const projectSelect = document.getElementById("select-project");

  const projects = Project.getProjects();
  projects.forEach((project) => {
    projectSelect.insertAdjacentHTML(
      "beforeend",
      `
        <option value="${project.title}" 
          id="${project.id}"
        >${project.title}</option>
      `,
    );
  });

  createCheckListBtn.addEventListener("click", createCheckListItem);

  const addTodoBtn = document.getElementById("add-task-btn");
  addTodoBtn.addEventListener("click", handleClick);
}

function handleClick() {
  const title = document.getElementById("create-task-name-input").value;
  const date = document.getElementById("task-duedate-input").value;

  const selectPriority = document.getElementById("create-task-select").value;

  const selectProject = document.getElementById("select-project");
  const selectedProjectId =
    selectProject.options[selectProject.selectedIndex].id;
  const checklist = CheckList.checkList;

  const todo = new CreateToDo(
    title,
    date,
    selectPriority,
    checklist,
    selectedProjectId,
  );
  CheckList.resetList();
  State.currentTask = todo;
  renderTask(selectedProjectId, todo.id);
}

export function createTaskDom() {
  State.currentTab = "Create task";
  mainContent(createTaskTemplate);
  createTask();
}

function createCheckListItem() {
  const checkListInput = document.getElementById(
    "create-checklist-input",
  ).value;
  const checklistId = crypto.randomUUID();
  const newItem = new CheckList(checklistId, checkListInput);
  renderCheckListSimple(CheckList.checkList);
  document.getElementById("create-checklist-input").value = "";
}

export function renderCheckListSimple(taskChecklist) {
  const checkListContainer = document.getElementById(
    "checklist-items-container",
  );
  checkListContainer.innerHTML = "";
  taskChecklist.forEach((item) => {
    checkListContainer.insertAdjacentHTML(
      "beforeend",
      `
            <div class="check-list-item" id="${item.id}">
                <div class="checklist-style"><input type="checkbox" 
                class="checklist-checkbox-item" 
                ${item.status ? "checked" : ''}>${item.title}
                </div>
                <span class="delete-checklist-item-btn">❌</span>
            </div>
      `,
    );
  });
}

export function renderTask(projectId, taskId) {
  const projectObject = find(projectId, taskId);
  const todoItem = projectObject.project.list[projectObject.toDoIndex];
   State.currentTask = todoItem;
  let taskPriority = null;
  try {
    if (todoItem.priority === "low") {
      taskPriority = "🟡 Low Priority";
    } else if (todoItem.priority === "medium") {
      taskPriority = "🟢 Medium Priority";
    } else {
      taskPriority = "🔴 Hight Priority";
    }
  } catch (error) {
    console.log(todoItem);
  }

  const toDoTemplate = `
<div id="task-header">
  <div class="task-project-info">
    <h1 id="project-title-h1"><i>${projectObject.project.title}</i></h1>
    <hr>
  </div>
  <div class="task-info-header">
    <span id="display-task-priority">${taskPriority}</span>
    <h2 id="display-task-duedate">Duedate: ${todoItem.dueDate}</h2>
  </div>
      
        <h1  style="font-size: 25px;" id="task-title">${todoItem.title}</h1>
    </div>
      <div id="checklist-items-wrapper">
        <h1><b><i>CheckList:</i></b></h1>
        <div id="checklist-items-container"></div>
      </div>
    </div>

    <div id="create-checklist-item" class="create-new-cheklist">
      Create a checklist item.
    </div>
`;
  mainContent(toDoTemplate);

  const projectTitle = document.getElementById("project-title-h1");
  projectTitle.addEventListener("click", () => {
    renderProject(projectId);
  });
  const createNewTodoBtn = document.getElementById("create-checklist-item");
  createNewTodoBtn.addEventListener("click", () => {
    console.log("works");
  });
  const checkListContainer = document.getElementById(
    "checklist-items-container",
  );
  renderCheckList(todoItem, checkListContainer);
}
