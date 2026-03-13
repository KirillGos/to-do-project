import "../Styles/mainPage.css";
import "../Styles/sidebar.css";
import "../Styles/search.css";
import "../Styles/todo.css";
import { displayProjectsSidebar, renderProject } from "./createProject";
import { createProjectDom } from "./createProject";
import { createTaskDom } from "./createTask";

export class State {
  static currentProject = "";
  static currentTask = "";
  static currentTab = "";
}


const sideBarTemplate = `
<div id="sidebar-utility">
        <div id="sidebar-toggle">
            ⬅
            </div>
            <div id="sidebar-create-todo" class="effect1">
            <span id="sidebar-create-todo-icon">➕</span>
            <span id="sidebar-create-todo-label">Create Task</span>
            </div>

            <div id="sidebar-today" class="effect1">
            <span id="sidebar-today-icon">⭐</span>
            <span id="sidebar-taday-label">Today</span>
        </div>

        <div id="sidebar-search" " class="effect1">
            <span id= "sidebar-search-icon">🔍</span>
            <span id="sidebar-search-label">Search</span>
            </div>

        <div id="sidebar-upcoming" class="effect1"    >
        <span id="sidebar-upcoming-icon">🧮</span>
            <span id="sidebar-upcoming-label">Upcoming</span>
        </div>
    </div>
    
      
 <div id="sidebar-projects"></div>
    
    <div id="sidebar-bottom">
        <div id="add-new-project" class="effect1">
        <span class="add-new-project-icon">+</span>
            <span class="add-new-project-label">New Project</span>
            </div>
    </div>
    </div>
    `;
const defaultMainContentTemplate = `
  <div id="default-content">
        <div id="today-title">Today</div>
        <div id="today-tasks">
            <div class="todo-task">
                <span class="today-todo-title">Finish Course</span>
                <span class="today-todo-project">Programming</span>
                <span class="today-due-date"></span>
            </div>
            <div class="todo-task">
                <span class="today-todo-title">Finish Course</span>
                <span class="today-todo-project">Programming</span>
                <span class="today-due-date"></span>
                </div>
                <div class="todo-task">
                <span class="today-todo-title">Finish Course</span>
                <span class="today-todo-project">Programming</span>
                <span class="today-due-date"></span>
                </div>
            <div class="todo-task">
            <span class="today-todo-title">Finish Course</span>
                <span class="today-todo-project">Programming</span>
                <span class="today-due-date"></span>
                </div>
            <div class="todo-task">
                <span class="today-todo-title">Finish Course</span>
                <span class="today-todo-project">Programming</span>
                <span class="today-due-date"></span>
            </div>
            <div class="todo-task">
                <span class="today-todo-title">Finish Course</span>
                <span class="today-todo-project">Programming</span>
                <span class="today-due-date"></span>
            </div>
            </div>
    </div>
`;

const searchTemplate = `
   <div id="search">
        <div id="search-input-area">
        <span id="search-input-area-look-icon">🔍</span>
            <input type="text" name="enter search value" id="search-input-area-input">
           
            </div>
        <div id="search-results">
        <div class="search-result  search-item" id="search-result-today">⭐ Today</div>
        <div class="search-result" id="search-result-projects">
        <div class="search-project-item search-item">
        <span class="search-project-icon">🔵</span>
        <span class="search-project-title">Programming</span>
        </div>
        <div class="search-project-item search-item">
        <span class="search-project-icon">🔵</span>
        <span class="search-project-title">Studying</span>
        </div>
                <div class="search-project-item search-item">
                <span class="search-project-icon">🔵</span>
                <span class="search-project-title">English</span>
                </div>
                <div class="search-project-item search-item">
                <span class="search-project-icon">🔵</span>
                <span class="search-project-title">Workout</span>
                </div>
            </div>
            
            <hr>
            <div class="search-result" id="search-result-todos">
            <div class="search-todo-item search-item">
                <span class="search-todo-icon">☑</span>
                <span class="search-todo-title">Do the dishes</span>
                </div>
                <div class="search-todo-item search-item">
                <span class="search-todo-icon">☑</span>
                <span class="search-todo-title">Swim</span>
                </div>
            <div class="search-todo-item search-item">
            <span class="search-todo-icon">☑</span>
            <span class="search-todo-title">Code</span>
            </div>
            <div class="search-todo-item search-item">
            <span class="search-todo-icon">☑</span>
            <span class="search-todo-title">Conquer the World</span>
            </div>
            </div>
            </div>
            </div>
`;

const upcomingTemplate = `<h1>Upcoming</h1>`;
const todayTemplate = `<h1>Today</h1>`;

function sideBar() {
  const sideBarDiv = document.getElementById("side-bar");
  sideBarDiv.insertAdjacentHTML("beforeend", sideBarTemplate);

  const sideBarSearch = document.getElementById("sidebar-search");
  sideBarSearch.addEventListener("click", () => {
    mainContent(searchTemplate);
  });

  const sideBarUpcoming = document.getElementById("sidebar-upcoming");
  sideBarUpcoming.addEventListener("click", () => {
    mainContent(upcomingTemplate);
  });

  const sidebarToday = document.getElementById("sidebar-today");
  sidebarToday.addEventListener("click", () => mainContent(todayTemplate));

  const createToDo = document.getElementById("sidebar-create-todo");
  createToDo.addEventListener("click", createTaskDom);

  const addProject = document.getElementById("add-new-project");
  addProject.addEventListener("click", createProjectDom);
  displayProjectsSidebar();
}

const homeButton = document.getElementById("main-content-header-home-button");
homeButton.addEventListener("click", () => mainContent());

export function mainContent(content = defaultMainContentTemplate) {
  const mainContentDiv = document.getElementById("content-part");
  mainContentDiv.innerHTML = "";
  mainContentDiv.insertAdjacentHTML("beforeend", content);
}

export function mainPage() {
  sideBar();
  renderProject("1");
}
