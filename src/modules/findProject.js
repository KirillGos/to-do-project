import Project from "./projects";
export default function findProject(projectId) {
  let index = null;
  Project.getProjects().forEach((item, i) => {
    if (item.id === projectId) {
      index = i;
    }
  });
  return index;
}
