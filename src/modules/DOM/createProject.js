import { mainContent, State } from "./mainPage.js";
import "../Styles/project.css";
import Project from "../projects.js";
import findProject from "../findProject.js";
import { renderTask } from "./createTask.js";
import { createProjectTemplate } from "./HTML Modules/createProjectTemplate.js";
import { categorizeProjects } from "./categorizeProjects.js";
import { editToDoCheckListItems } from "../updateToDo.js";
import { renderCheckList } from "./renderChecklist.js";
export function createProjectDom() {
  State.currentTab = "Create a project";
  mainContent(createProjectTemplate);
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", handleClick);
}

function handleClick() {
  const projectTitle = document.getElementById(
    "create-project-name-input",
  ).value;
  const projectDescription = document.getElementById(
    "create-project-description-textarea",
  ).value;
  const projectDate = document.getElementById("project-duedate-input").value;
  const projectPriority = document.getElementById(
    "create-project-select",
  ).value;
  const newProject = new Project(
    projectTitle,
    projectDate,
    projectPriority,
    projectDescription,
  );
  State.currentProject = newProject;
  renderProject(newProject.id);
  displayProjectsSidebar();
}

export function displayProjectsSidebar() {
  const sidebarProjects = document.getElementById("sidebar-projects");
  sidebarProjects.innerHTML = "";
  const projects = Project.displayProjects();
  projects.forEach((project) => {
    sidebarProjects.insertAdjacentHTML(
      "afterbegin",
      `
        <div class ="sidebar-project-item" id="${project.id}">
         <div class="sidebar-project-title">${project.title}</div>
         </div>
    `,
    );
  });
  const allProjectsListed = document.querySelectorAll(".sidebar-project-item");
  allProjectsListed.forEach((item) => {
    item.addEventListener("click", () => {
      renderProject(item.id);
    });
  });
}

export function renderProject(id) {
  const project = Project.getProjects()[findProject(id)];
  State.currentProject = project;

  let projectPriority = null;
  if (project.priority === "low") {
    projectPriority = "🟡 Low Priority";
  } else if (project.priority === "medium") {
    projectPriority = "🟢 Medium Priority";
  } else {
    projectPriority = "🔴 Hight Priority";
  }
  const displayProjectTemplate = `    
    <div id="project-title">
        <span>
        <span class="display-project-priority">${projectPriority}</span>
        </span>
        <span id="display-project-duedate">${project.date}</span>
    </div>
    <div id="display-project">
        <div id="project-todos-wrapper">
        <div id="project-todos-wrapper-title">
        Todos In this <i> ${project.title} </i> Project
        </div>
        <div id="project-description">
          ${project.description}
        </div>
        <div id="project-category">
          <div class="project-category-item active-category" id="all-projects" data-priority="all">All</div>
          <div  class="project-category-item" id="important-projects" data-priority="important">Important</div>
          <div  class="project-category-item" id="edit-category" data-priority="other">
            <select id="select-priority">
              <option value="nothing">ooo</option>
              <option value="low">Unimportant</option>
              <option value="medium">Middle</option>
           </select>
          </div>
        </div>
        <div id="todo-container">
          
        </div>
      </div>
    </div>
    `;

  mainContent(displayProjectTemplate);
  renderTasks(project);
  categorizeProjects();
}

export function renderTasks(project) {
  const taskContainer = document.getElementById("todo-container");
  taskContainer.innerHTML = "";
  project.list.forEach((task) => {
    taskContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="task-item" id="${task.id}" data-importance="${task.priority}">
          <div class="task-header">
            <h1 class="task-title">${task.title}</h1>
            <div class="task-utility">OOO</div>
          </div>
          <div class='checklist-items-container'>
          </div>
        </div>
    `,
    );
    const checkListContainer = document.getElementById(`${task.id}`)
      .childNodes[3];
    renderCheckList(task, checkListContainer);
  });

  const allTaskUtilityBtns = document.querySelectorAll(".task-utility");
  allTaskUtilityBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      renderTask(State.currentProject.id, btn.parentElement.parentElement.id);
    });
  });
  addEventToCheckbox();
  addEventToDeleteCheckbox();
}

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

export function addEventToDeleteCheckbox() {
  const allDeleteCheckListItems = document.querySelectorAll(
    ".delete-checklist-item-btn",
  );
  allDeleteCheckListItems.forEach(btn => {
    btn.addEventListener('click', deleteCheckListAction);
  })
}

export function deleteCheckListAction(e) {
  console.log(e.target.parentElement.parentElement.parentElement);
}