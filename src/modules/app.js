import Project from "./projects";
import CreateToDo from "./todo";
import deleteToDo from "./deleteToDo";
import * as updateFunctions from './updateToDo';

export default function App() {
  const Plans = new Project("Plans");
  const toDo = new CreateToDo('Test', '', '', "", "", "", Plans.id);
  const toDo2 = new CreateToDo('Tes12t', '', '', "", "", "", Plans.id);
  const toDo3 = new CreateToDo('Test2', '', '', "", "", "", Plans.id);
  // deleteToDo(toDo.projectId,  toDo.id);
  updateFunctions.editToDoDescription(Plans.id, toDo.id, "Changed")
  updateFunctions.editToDoCheckLists(Plans.id, toDo.id, "Changed")
  updateFunctions.editToDoNotes(Plans.id, toDo.id, "Changed")
  updateFunctions.editToDoPriority(Plans.id, toDo.id, "Changed")
  updateFunctions.editToDoTitle(Plans.id, toDo.id, "Changed")
  updateFunctions.editToDoDueDate(Plans.id, toDo.id, "Changed")
  console.log(Plans);
}

