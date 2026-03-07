import { mainContent } from "./mainPage.js";
import Project from "../projects.js";
import findProject from "../findProject.js";

const createProjectTemplate = `
    <div id="create-project-container">
        <div id="create-project-header">
            <h1>Create a Project</h1>
        </div>
        <div id="create-project-name">
            <input id="create-project-name-input" type="text" placeholder="enter project name">
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
  mainContent(createProjectTemplate);
  const addProjectBtn = document.getElementById("add-project-btn");

  addProjectBtn.addEventListener("click", handleClick);
}

function handleClick() {
  const projectTitle = document.getElementById(
    "create-project-name-input",
  ).value;
  const projectDate = document.getElementById("project-duedate-input").value;
  const projectPriority = document.getElementById("create-project-select").value;
  const newProject = new Project(projectTitle, projectDate, projectPriority);
  renderProject(newProject.id);
  displayProject();
}
export function displayProject() {
  const sidebarProjects = document.getElementById("sidebar-projects");
  sidebarProjects.innerHTML = "";
  const projects = Project.displayProjects();
  projects.forEach((project) => {
    sidebarProjects.insertAdjacentHTML(
      "afterbegin",
      `
        <div class ="sidebar-project-item" id="${project.id}">
         <div class="sidebar-project-title">${project.title}</div>
         <div class="sidebar-project-tasks">            <div class="sidebar-todo-task">
                <span class="sidebar-todo-priority">🟣</span>
                    <span class="sidebar-todo-title">Study C</span>
                </div>
                <div class="sidebar-todo-task">
                    <span class="sidebar-todo-priority">🟣</span>
                    <span class="sidebar-todo-title">Study For Finals</span>
                    </div>
                    <div class="sidebar-todo-task">
                    <span class="sidebar-todo-priority">🟣</span>
                    <span class="sidebar-todo-title">Finish the Project</span>
                </div>
             </div></div>
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

function renderProject(id) {
  const project = Project.getProjects()[findProject(id)];
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
        <div id="project-todos">
        <div class="todo-task" id=""">
                <span class="project-todo-title">Finish Course</span>
                <div class="project-todo-project">Programming</div>
                <span class="project-due-date"></span>
            </div>
            <div class="todo-task" id=""">
                <span class="project-todo-title">Get a Job</span>
                <div class="project-todo-project">Programming</div>
                <span class="project-due-date"></span>
            </div>
             <div class="todo-task" id=""">
                <span class="project-todo-title">Do an Interview</span>
                <div class="project-todo-project">Programming</div>
                <span class="project-due-date"></span>
            </div>
             </div>
        </div>
        <div id="project-checklists">
            <div id="project-checklists-title">CheckList for Today</div>
            <div id="projects-checklist-items-wrapper">
                <div class="project-checklist-item">
                <input type="checkbox">
                <span class="project-checklist-item-title">Finish assignment</span>
            </div>
            <div class="project-checklist-item">
                <input type="checkbox">
                <span class="project-checklist-item-title">Workout</span>
                </div>
                <div class="project-checklist-item">
                <input type="checkbox">
                <span class="project-checklist-item-title">Buy Groceries</span>
                </div>
                <div class="project-checklist-item">
                <input type="checkbox">
                <span class="project-checklist-item-title">Respond</span>
                </div>
                
                </div>
                </div>
    </div>
    `;
  mainContent(displayProjectTemplate);
}
