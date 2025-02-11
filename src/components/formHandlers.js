export const formHandlerProject = (formData, projectManager) => {
    //Selects the only entry in formData using next
    const projName = formData.get('input-project-name');

    const newProj = projectManager.createProject();
    newProj.changeProjectName(projName);

    return newProj;
}

export const formHandlerTodo = (formData, project) => {
    //Selects the only entry in formData using next
    const title = formData.get('input-todo-title');
    const description = formData.get('input-todo-description');

    const newTodo = project.todoManager.createTodo();
    newTodo.changeTitle(title);
    newTodo.changeDescription(description);

    console.log(newTodo);

    return newTodo;
}