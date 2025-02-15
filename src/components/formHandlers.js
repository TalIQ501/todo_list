export const formHandlerProject = (formData, projectManager) => {
    const projectID = formData.get('project-form-id')
    const isNew = formData.get('project-form-type');
    const projName = formData.get('input-project-name');

    if (isNew) {
        const newProj = projectManager.createProject();
        newProj.changeProjectName(projName);
        projectManager.addProject(newProj);
        return
    }

    const selectedProj = projectManager.findProjectByID(projectID);
    selectedProj.changeProjectName(projName);
    projectManager.updateProject(selectedProj);
    return
}

export const formHandlerTodo = (formData, pm) => {
    const project = pm.getCurrentProject();
    const todoID = formData.get('todo-form-id');
    const isNew = formData.get('todo-form-type');
    const title = formData.get('input-todo-title');
    const description = formData.get('input-todo-description');

    console.log(formData);
    console.log(isNew)

    if (isNew === 'new') {
        const newTodo = project.todoManager.createTodo();
        newTodo.changeTitle(title);
        newTodo.changeDescription(description);
        project.todoManager.addTodo(newTodo);
        return
    }
    
    const selectedTodo = project.todoManager.findTodoByID(todoID);
    selectedTodo.changeDescription(description);
    project.todoManager.updateTodo(selectedTodo);

    return;
}