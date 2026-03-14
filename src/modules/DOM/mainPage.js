import "../Styles/mainPage.css";
import "../Styles/sidebar.css";
import "../Styles/search.css";
import "../Styles/todo.css";
import { displayProjectsSidebar, renderProject } from "./createProject";
import { createProjectDom } from "./createProject";
import { createTaskDom } from "./createTask";
import { defaultMainContentTemplate } from "./HTML Modules/defaultMainContentTemplate.js";
import { searchTemplate } from "./HTML Modules/searchTemplate.js";
import { sideBarTemplate } from "./HTML Modules/sideBarTemplate.js";
import {upcomingTemplate} from './HTML Modules/upcomingTemplate.js';
import {todayTemplate} from './HTML Modules/todayTemplate.js'

export class State {
  static currentProject = "";
  static currentTask = "";
  static currentTab = "";
}

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

export function mainContent(content = defaultMainContentTemplate) {
  const mainContentDiv = document.getElementById("content-part");
  mainContentDiv.innerHTML = "";
  mainContentDiv.insertAdjacentHTML("beforeend", content);
}

export function mainPage() {
  sideBar();
  renderProject("1");
}
