import { renderTasks } from "./createProject";
import { State } from "./mainPage";

export function categorizeProjects() {
  const categorizeProjects = document.querySelectorAll(
    ".project-category-item",
  );

  categorizeProjects.forEach((div) => {
    div.addEventListener("click", () => {
      categorizeProjects.forEach((item) => {
        item.classList.remove("active-category");
      });
      sortTasks(div, div.dataset.priority);
    });
  });
}

function sortTasks(div, priority) {
  const selected = document.getElementById("select-priority").value;
  const todoContainer = document.getElementById("todo-container");
  renderTasks(State.currentProject);

  div.classList.add("active-category");
  const tasks = document.querySelectorAll(".task-item");
  if (priority == "important") {
    tasks.forEach((task) => {
      if (task.dataset.importance != "high") {
        task.remove();
      }
    });
  } else if (priority == "other") {
    if (selected == "medium" || selected == "low") {
      tasks.forEach((task) => {
        if (task.dataset.importance != selected) {
          task.remove();
        }
      });
    } else if(selected == 'nothing') {
      todoContainer.innerHTML = `<h1>Select category!</h1>`
    }
  }

  if (todoContainer.childElementCount == 0) {
    todoContainer.innerHTML = `<h1>No tasks here!</h1>`;
  }
}
