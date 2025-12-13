import Project from "./projects";

export default class CreateToDo {
  constructor(title, description, dueDate, priority, notes, checkLists, projectId = 1) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checkLists = checkLists;
    this.id = crypto.randomUUID();
    this.projectId = projectId;
    Project.addToDoToProject(projectId, this)
  }
}