import { saveProjectManager } from "./localStorageHandler";

export const formHandlerProject = (formData, projectManager) => {
    const projectID = formData.get('project-form-id');
    const isNew = formData.get('project-form-type');
    const projName = formData.get('input-project-name');

    if (isNew === 'new') {
        const newProj = projectManager.createProject();
        newProj.changeProjectName(projName);
        projectManager.addProject(newProj);
        if (projectManager.getCurrentProject() === undefined || projectManager.getCurrentProject() === null) {
            projectManager.changeCurrentProject(newProj.getID())
        }
        saveProjectManager(projectManager);
        return
    }

    const selectedProj = projectManager.findProjectByID(projectID);
    selectedProj.changeProjectName(projName);   
    projectManager.updateProject(selectedProj);
    saveProjectManager(pm);
    return
}

export const formHandlerTodo = (formData, projectManager) => {
    const project = projectManager.getCurrentProject() ? projectManager.getCurrentProject() : null;
    const todoID = formData.get('todo-form-id');
    const isNew = formData.get('todo-form-type');
    const title = formData.get('input-todo-title');
    const description = formData.get('input-todo-description');
    const date = formData.get('input-todo-date');

    if (isNew === 'new') {
        const newTodo = project.todoManager.createTodo();
        newTodo.changeTitle(title);
        newTodo.changeDescription(description);
        newTodo.changeDueDate(date);
        project.todoManager.addTodo(newTodo);
        saveProjectManager(projectManager);
        return
    }
    
    const selectedTodo = project.todoManager.findTodoByID(todoID);
    selectedTodo.changeTitle(title);
    selectedTodo.changeDescription(description);
    selectedTodo.changeDueDate(date);

    project.todoManager.updateTodo(selectedTodo);
    saveProjectManager(projectManager);

    return;
}