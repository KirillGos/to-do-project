import findProject from "./findProject";
import Project from "./projects";

export default function deleteToDo(projectId, toDoId) {
  // get the projects array
  const projects = Project.getProjects();
  // get the specific project
  const project = projects[findProject(projectId)];
  // find the toDo index
  const toDoIndex = findToDo(project.list, toDoId);
  // remove the toDo from the project
  project.splice(toDoIndex, 1);
}
