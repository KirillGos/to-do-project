import find from "../find";
import Project from "../projects";
import CreateToDo from "../todo";
import { mainContent } from "./mainPage";

export const createTaskTemplate = `
<div id="create-task-table">
     <div id="create-task-header">
            <h1>Create a Task</h1>
        </div>
        <div id="create-task-name">
            <input id="create-task-name-input" type="text" placeholder="enter task name">
        </div>
        <div id="create-task-description">
            <h1>Enter task description</h1>
            <textarea id="create-task-description-textarea"
             placeholder="enter task description." name="textarea">
            </textarea>
        </div>
        <div id="create-task-checklist">

        </div>
        <div id="create-project-duedate">
            <h1>Enter Due Date</h1>
            <input type="date" id="project-duedate-input" >
        </div>
        <div id="task-priority">
            <h1>Select Task Priority</h1>
            <select name="choice" id="create-task-select">
            <option value="high">🔴High Priority</option>
            <option value="medium">🟢Meidum Priority</option>
            <option value="low">🟡Low Priority</option>
            </select>
            </div>
        <div>
        <div id="select-project-for-task">
            <h1>Select the project of the Task</h1>
            <select name="choice" id="select-project">
            </select>
            </div>
        <div>
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
            <button id="add-task-btn">Create Task</button>
        </div>
</div>
`;

class CheckList {
  static checkList = [];
  constructor(id, title) {
    this.id = id;
    this.title = title;
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
  const description = document.getElementById(
    "create-task-description-textarea",
  ).value;

  const date = document.getElementById("project-duedate-input").value;

  const selectPriority = document.getElementById("create-task-select").value;

  const selectProject = document.getElementById("select-project");
  const selectedProjectId =
    selectProject.options[selectProject.selectedIndex].id;
  const checklist = CheckList.checkList;

  const todo = new CreateToDo(
    title,
    description,
    date,
    selectPriority,
    checklist,
    selectedProjectId,
  );
  CheckList.resetList();
  renderTask(selectedProjectId, todo.id);
}

export function createTaskDom() {
  mainContent(createTaskTemplate);
  createTask();
}

function createCheckListItem() {
  const checkListInput = document.getElementById(
    "create-checklist-input",
  ).value;
  const checklistId = crypto.randomUUID();
  const newItem = new CheckList(checklistId, checkListInput);
  renderCheckList(CheckList.checkList);
  document.getElementById("create-checklist-input").value = "";
}

function renderCheckList(taskChecklist) {
  const checkListContainer = document.getElementById(
    "checklist-items-container",
  );
  checkListContainer.innerHTML = "";
    taskChecklist.forEach((item) => {
      checkListContainer.insertAdjacentHTML(
        "beforeend",
        `
          <div class="check-list-item" id="${item.id}">
              <input type="checkbox">${item.title}
              <span class="delete-checklist-item">❌</span>
          </div>
      `,
      );
    });
}

export function renderTask(projectId, taskId) {
  const projectObject = find(projectId, taskId);
  const todoItem = projectObject.project.list[projectObject.toDoIndex];

  let taskPriority = null;
  if (todoItem.priority === "low") {
    taskPriority = "🟡 Low Priority";
  } else if (todoItem.priority === "medium") {
    taskPriority = "🟢 Medium Priority";
  } else {
    taskPriority = "🔴 Hight Priority";
  }

  const toDoTemplate = `
<div id="task-header">
  <div class="task-project-info">
    <h1><i>${projectObject.project.title}</i></h1>
    <hr>
  </div>
  <div class="task-info-header">
    <span id="display-task-priority">${taskPriority}</span>
    <h2 id="display-task-duedate">Duedate: ${todoItem.dueDate}</h2>
  </div>
      
        <h1  style="font-size: 25px;" id="task-title">${todoItem.title}</h1>
    </div>
     <div id="display-task-description">${todoItem.description}</div>
      <div id="checklist-items-wrapper">
        <h1><b><i>CheckList:</i></b></h1>
        <div id="checklist-items-container"></div>
      </div>
    </div>
`;
  mainContent(toDoTemplate);
  renderCheckList(todoItem.checkLists);
}
