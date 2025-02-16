export const cycleProjects = (projectManager, displayManager) => {
    const projectsDiv = document.getElementById('project-list');

    projectsDiv.innerHTML = '';

    projectManager.getProjects().forEach(project => {
        displayManager.displayProjectSidebar(projectsDiv, project, projectManager, displayManager);
    })
}

export const cycleTodos = (projectManager, displayManager) => {
    const todosDiv = document.getElementById('todos');
    const project = projectManager.getCurrentProject() ? projectManager.getCurrentProject() : null;
    const todos = project ? project.todoManager.getTodos() : null

    todosDiv.innerHTML = '';

    if (!project || todos.length === 0) {
        displayManager.emptyTodos();
        return
    }

    todos.forEach(todo => {
        displayManager.displayTodo(todosDiv, todo, projectManager, displayManager);
    })
}