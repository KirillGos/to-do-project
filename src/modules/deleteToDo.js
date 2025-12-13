import find from "./find";

export default function deleteToDo(projectId, toDoId) {
  const {project, toDoIndex} = find(projectId, toDoId);
  project.list.splice(toDoIndex, 1);
  console.log('deleted');
} 
