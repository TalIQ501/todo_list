export const cycleProjects = (projectManager, displayManager) => {
    const projectsDiv = document.getElementById('project-list');

    projectsDiv.innerHTML = '';

    projectManager.getProjects().forEach(project => {
        displayManager.displayProjectSidebar(projectsDiv, project);
    })
}

export const cycleTodos = (project, displayManager) => {
    const todosDiv = document.getElementById('todos');

    todosDiv.innerHTML = ''

    project.todoManager.getTodos().forEach(todo => {
        displayManager.displayTodo(todosDiv, todo);
        //todosDiv.addEventListener('click', () => )
    })
}