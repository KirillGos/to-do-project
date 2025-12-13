import Project from './projects'
// save projects and their contents to localStorage

export default   function saveToLocalStorage() {
    // get the projects and stringify them
    const projectsString = JSON.stringify(Project.getProjects());
    // save the projects to local storage
    localStorage.projects =  projectsString;
}