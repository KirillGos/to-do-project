import "../Styles/mainPage.css";
import "../Styles/sidebar.css";
import "../Styles/search.css";

export function mainPage() {
  document.body.append(sideBar(), mainContent());
}

const sideBarTemplate = `
    <div id="sidebar-utility">
        <div id="sidebar-toggle">
            ⬅
        </div>
        <div id="sidebar-create-todo">
            <span id="sidebar-create-todo-icon">➕</span>
            <span id="sidebar-create-todo-label">Create Task</span>
        </div>
        <div id="sidebar-today">
            <span id="sidebar-today-icon">⭐</span>
            <span id="sidebar-taday-label">Today</span>
        </div>

        <div id="sidebar-search">
            <span id= "sidebar-search-icon">🔍</span>
            <span id="sidebar-search-label">Search</span>
        </div>

        <div id="sidebar-upcoming">
            <span id="sidebar-upcoming-icon">🧮</span>
            <span id="sidebar-upcoming-label">Upcoming</span>
        </div>
    </div>
    
      
 <div id="sidebar-projects">
        <div class="sidebar-project-item">
            <div class="sidebar-project-title">Studying</div>
            <div class="sidebar-project-tasks">
                <div class="sidebar-todo-task">
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
             </div>

        </div>
        <div class="sidebar-project-item">
            <div class="sidebar-project-title">Studying2</div>
            <div class="sidebar-project-tasks">
                <div class="sidebar-todo-task">
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
             </div>

        </div>

    </div>
    

    <div id="sidebar-bottom">
        <div id="add-new-project">
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
const displayProjectTempalte = `    
    <div id="project-title">
        <span>
        <span class="display-project-priority">🟢</span>
        <span class="display-project-title">Prepare Presentation</span>
        </span>
        <span id="display-project-duedate">12.12.2026</span>
    </div>
    <div id="display-project">
        <div id="project-todos-wrapper">
        <div id="project-todos-wrapper-title">
        Todos In this <i> Prepare Presentation </i> Project
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
            <span id="search-input-area-delete-icon">❌</span>
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
const upcomingTemplate = "";

function sideBar() {
  const sideBar = document.createElement("div");
  sideBar.id = "side-bar";

  sideBar.insertAdjacentHTML("beforeend", sideBarTemplate);
  return sideBar;
}

function mainContent() {
  const mainContent = document.createElement("div");
  mainContent.id = "main-content";

  mainContent.insertAdjacentHTML("beforeend", toDoTemplate);

  return mainContent;
}
