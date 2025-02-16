export const saveProjectManager = (pm) => {
    //Saving data in localStorage as JSON
    const data = {
        latestProjectID: pm.getLatestID(),
        currentProjectID: pm.getCurrentProject() ? pm.getCurrentProject().getID() : null,
        projects: pm.getProjects().map(project => project.JSONify())
    }
    localStorage.setItem('projectManagerData', JSON.stringify(data));
}

export const loadProjectManager = (pm) => {
    const dataRetrieved = localStorage.getItem('projectManagerData');
    
    //If data doesn't exist in localStorage
    if (!dataRetrieved) {
        return false;
    }

    const data = JSON.parse(dataRetrieved);

    //Populating the PM with data
    data.projects.forEach(projectData => {
        const project = pm.createProject();
        project.changeProjectName(projectData.project)

        projectData.todos.forEach(todoData => {
            const todo = project.todoManager.createTodo();
            todo.changeTitle(todoData.title);
            todo.changeDescription(todoData.description);
            todo.changeDueDate(todoData.date);
            if (todoData.completed) todo.toggleComplete();
            project.todoManager.addTodo(todo);
        })
        pm.addProject(project);
    })

    return true
}