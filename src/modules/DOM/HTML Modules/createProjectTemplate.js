export const createProjectTemplate = `
    <div id="create-project-container">
        <div id="create-project-header">
            <h1>Create a Project</h1>
        </div>
        <div id="create-project-name">
            <input id="create-project-name-input" type="text" placeholder="enter project name">
        </div>
        <div id="create-project-description">
            <h1>Enter project description</h1>
            <textarea id="create-project-description-textarea"
             placeholder="enter project description." name="textarea" col="15" rows="12"></textarea>
        </div>
        <div id="create-project-duedate">
            <h1>Enter Due Date</h1>
            <input type="date" id="project-duedate-input" >
        </div>
        <div id="project-priority">
            <h1>Select Priority</h1>
            <select name="choice" id="create-project-select">
            <option value="high">🔴High Priority</option>
            <option value="medium">🟢Meidum Priority</option>
            <option value="low">🟡Low Priority</option>
            </select>
            </div>
        <div>
            <button id="add-project-btn" type="text">Add</button>
        </div>
    </div>
`;