import "../Styles/mainPage.css";
import "../Styles/sidebar.css";
import "../Styles/search.css";
import "../Styles/todo.css";
import {displayProject} from './createProject';
import {createProjectDom} from './createProject';
import {createTaskTemplate} from "./creeateTask"

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


const toDoTemplate = `
<div id="display-todo">
        <div id="todo-title">Finish Course</div>
        <div id="todo-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia porro, nihil quod, cum sint corporis sunt dolorem illum aspernatur, veniam molestiae officia possimus quasi nulla officiis perferendis voluptatem vero?
        </div>
        <div id="todo-checklist">
            <div class="todo-checklist-item">
                <input type="checkbox" name="todo-checklsit" id="">
                <span class="todo-checklist-item-title">Finish course</span>
            </div>
            </div>
            <div id="todo-priority">
            <select name="choice">
            <option value="high">🔴High Priority</option>
            <option value="medium">🟢Meidum Priority</option>
            <option value="low">🟡Low Priority</option>
            </select>
            </div>
        <div id="todo-due-date">
        <input type="date" name="due todo-due-date" id="">
        </div>
        <div id="todo-notes">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga consequuntur voluptatum autem harum fugit blanditiis eveniet! Amet corrupti adipisci optio natus, earum deleniti voluptatibus facilis ad in voluptas, odio repudiandae?
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
const createProjectTemplate = `<h1>Crete a Project</h1>`;

function sideBar() {
    let currentTab = null;
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
  createToDo.addEventListener("click", () => mainContent(createTaskTemplate));

  const addProject = document.getElementById("add-new-project");
  addProject.addEventListener("click", () =>
    createProjectDom()
  );
  displayProject();
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
  mainContent(createTaskTemplate);
}
