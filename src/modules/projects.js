import findProject from "./findProject";
import saveToLocalStorage from './saveProjects';

// Project class for creating and manipulating projects
export default class Project  {
  static #projects = setData();
  
  constructor(title) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.list = [];
    Project.#projects.push(this);
    saveToLocalStorage();
  } 
  static displayProjects() {
    return Project.#projects;
  }
  static addToDoToProject(projectId, toDo) {
    const project = Project.#projects[findProject(projectId)]; 
    project.list.push(toDo);
    saveToLocalStorage();
  }
  static getProjects() {
    return this.#projects;
  }
  // methods for deleting, editing a project
  deleteProject(projectId) {
    if(projectId === 1) return;
    const index = findProject(projectId);
    index !== null ? Project.#projects.splice(index, 1) : null;
    saveToLocalStorage();
  }
  editProjectTitle(projectId, value) {
      const index = findProject(projectId);
      Project.#projects[index].title = value;
      saveToLocalStorage();
  }

}

function setData() {
  if(localStorage.projects !== undefined) {
    return JSON.parse(localStorage.projects)
  } 
  return [{title: "Default", id: 1, list: []}];
}