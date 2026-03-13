 export const createTaskTemplate = `
<div id="create-task-table">
     <div id="create-task-header">
            <h1>Create a Task</h1>
        </div>
        <div id="create-task-name">
            <input id="create-task-name-input" type="text" placeholder="enter task name">
        </div>
        <div id="create-task-checklist">

        </div>
        <div id="create-task-duedate">
            <h1>Enter Due Date</h1>
            <input type="date" id="task-duedate-input" >
        </div>
        <div id="task-priority">
            <h1>Select Task Priority</h1>
            <select name="choice" id="create-task-select">
            <option value="high">🔴High Priority</option>
            <option value="medium">🟢Meidum Priority</option>
            <option value="low">🟡Low Priority</option>
            </select>
            </div>
        <div>
        <div id="select-project-for-task">
            <h1>Select the project of the Task</h1>
            <select name="choice" id="select-project">
            </select>
            </div>
        <div>
        <div id="task-checklist-container">
            <h1>Create Checklist for this task</h1>
            <input type="text"
                name="task name input"
                placeholder="write checklist"
                type="text"
                id="create-checklist-input"
                >
            <button id="add-checklist-btn">Add Checklist</button>
            <div id="checklist-items-container">
                
            </div>
        </div>
            <button id="add-task-btn">Create Task</button>
        </div>
</div>
`;
