import findProject from "./findProject";
// Project class for creating and manipulating projects
export default class Project  {
  static #projects = [{title: "Default", id: 1, list: []}];
  constructor(title) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.list = [];
    Project.#projects.push(this);
  }
  static displayProjects() {
    return Project.#projects;
  }
  static addToDoToProject(projectId, toDo) {
    const project = Project.#projects[findProject(projectId)]; 
    project.list.push(toDo);
  }
  static getProjects() {
    return this.#projects;
  }
  // methods for deleting, editing a project
  deleteProject(projectId) {
    const index = findProject(projectId);
    index !== null ? Project.#projects.splice(index, 1) : null;
  }
  editProjectTitle(projectId, value) {
      const index = findProject(projectId);
      Project.#projects[index].title = value;
  }

}

