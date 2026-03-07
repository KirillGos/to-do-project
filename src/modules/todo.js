import Project from "./projects";
import saveToLocalStorage from "./saveProjects";
export default class CreateToDo {
  constructor(title, description, dueDate, priority, checkList, projectId = 1) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checkLists = checkList;
    this.id = crypto.randomUUID();
    this.projectId = projectId;
    Project.addToDoToProject(projectId, this);
    saveToLocalStorage();
  }
}