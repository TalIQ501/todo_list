export const cycleProjects = (projectManager, displayManager) => {
    const projectsDiv = document.getElementById('project-list');

    projectsDiv.innerHTML = '';

    projectManager.getProjects().forEach(project => {
        displayManager.displayProjectSidebar(projectsDiv, project);
    })
}

export const cycleTodos = (projectManager, displayManager) => {
    const todosDiv = document.getElementById('todos');
    const project = projectManager.getCurrentProject();

    todosDiv.innerHTML = '';

    project.todoManager.getTodos().forEach(todo => {
        displayManager.displayTodo(todosDiv, todo, projectManager, displayManager);
    })
}