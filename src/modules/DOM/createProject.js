import { mainContent, State } from "./mainPage.js";
import Project from "../projects.js";
import findProject from "../findProject.js";
import { renderTask } from "./createTask.js";

const createProjectTemplate = `
    <div id="create-project-container">
        <div id="create-project-header">
            <h1>Create a Project</h1>
        </div>
        <div id="create-project-name">
            <input id="create-project-name-input" type="text" placeholder="enter project name">
        </div>
        <div id="create-project-description">
            <h1>Enter project description</h1>
            <textarea id="create-project-description-textarea"
             placeholder="enter project description." name="textarea" col="15" rows="12"></textarea>
        </div>
        <div id="create-project-duedate">
            <h1>Enter Due Date</h1>
            <input type="date" id="project-duedate-input" >
        </div>
        <div id="project-priority">
            <h1>Select Priority</h1>
            <select name="choice" id="create-project-select">
            <option value="high">🔴High Priority</option>
            <option value="medium">🟢Meidum Priority</option>
            <option value="low">🟡Low Priority</option>
            </select>
            </div>
        <div>
            <button id="add-project-btn" type="text">Add</button>
        </div>
    </div>
`;


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
  const projectDescription = document.getElementById("create-project-description-textarea").value;
  const projectDate = document.getElementById("project-duedate-input").value;
  const projectPriority = document.getElementById("create-project-select").value;
  const newProject = new Project(projectTitle, projectDate, projectPriority, projectDescription);
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
  if(project.priority === "low") {
    projectPriority = "🟡 Low Priority";
  } else if(project.priority === "medium") {
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
        <div id="todo-container">
          <h1 class="todo-container-header">Todos:</h1>
          <div id="todos">
        </div>
        
          </div>

          <div id="checklists-container">
            <h1 class="checklists-title">Checklists in this project:</h1>
            <div id="checklists">
            
            </div>
          </div>
    </div>
    `;

  mainContent(displayProjectTemplate);
  renderTasks(project);
} 

function renderTasks(project){
  const taskContainer = document.getElementById("todos");
  project.list.forEach(task => {
    taskContainer.insertAdjacentHTML('beforeend', `
        <div class="task-item" id="${task.id}">
          <h1 class="task-title-h1">${task.title}</h1>
          <span class="task-duedate-span">${task.dueDate}</span>
        </div>
    `);  
  }); 
  const allTasksListed = document.querySelectorAll(".task-item");
  allTasksListed.forEach(task => {
    task.addEventListener('click', () => {
      renderTask(State.currentProject.id, task.id);
    })
  })
}
