import Project from "./projects";
import findProject from "./findProject";
import findToDo from "./findToDo";

export default function find(projectId, toDoId) {
  const projects = Project.getProjects();
  // get the specific project
  const project = projects[findProject(projectId)];
  // find the toDo index
  const toDoIndex = findToDo(project.list, toDoId);
  // remove the toDo from the project

  return {
    project,    
    projects,
    toDoIndex
  }
}
