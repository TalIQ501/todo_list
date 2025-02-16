import { cycleProjects, cycleTodos } from "./cycleLists.js";
import { saveProjectManager } from "./localStorageHandler.js";

export const projectClickHandler = (id, pm, dm) => {
    pm.changeCurrentProject(id);

    cycleTodos(pm, dm);
}

export const projectFormClickHandler = (dialog, isNew, project) => {
    document.getElementById('project-form-type').value = isNew;
    document.getElementById('project-form-id').value = '';

    //Setingg default value for new form
    if (isNew === 'new') {
        document.getElementById('input-project-name').value = '';
    }

    //Passinggg existing data to form
    if (!(isNew === 'new')) {
        document.getElementById('project-form-id').value = project.getID();
        document.getElementById('input-project-name').value = project.getProjectName();
    }

    dialog.showModal();
}

export const todoFormClickHandler = (dialog, isNew, todo) => {
    document.getElementById('todo-form-type').value = isNew;
    document.getElementById('todo-form-id').value = '';

    //Parsing to string
    const dueDateString = (dueDate) => {
        const year = dueDate.getFullYear();
        const month = String(dueDate.getMonth() + 1).padStart(2, '0');
        const day = String(dueDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    if (isNew === 'new') {
        document.getElementById('input-todo-title').value = '';
        document.getElementById('input-todo-description').value = '';
        const newDate = new Date();
        document.getElementById('input-todo-date').value = dueDateString(newDate);
    }

    if (isNew !== 'new') {
        document.getElementById('input-todo-title').value = todo.getTitle();
        document.getElementById('input-todo-description').value = todo.getDescription();
        document.getElementById('todo-form-id').value = todo.getTodoID();
        document.getElementById('input-todo-date').value = dueDateString(todo.getDueDate());
    }
    
    dialog.showModal();
}

export const checkMarkClickHandler = (todo, pm, dm) => {
    todo.toggleComplete();

    const project = pm.getCurrentProject();

    project.todoManager.updateTodo(todo);

    saveProjectManager(pm)

    cycleTodos(pm, dm);
}

export const deleteProject = (id, pm, dm) => {
    const currentProject = pm.getCurrentProject();
    const currentID = currentProject.getID();

    pm.removeProject(id);

    cycleProjects(pm, dm);

    //Checking if no projects exist
    if (pm.getProjects().length === 0) {
        dm.emptyProjects();
        pm.changeCurrentProject(null);
        cycleTodos(pm, dm)
        saveProjectManager(pm)
        return
    }

    //Returning to previous project if current project is deleted
    if (id === currentID) {
        pm.prevProject();
        cycleTodos(pm, dm);
    }

    saveProjectManager(pm)
}

export const deleteTodo = (id, pm, dm) => {
    const currentProject = pm.getCurrentProject();

    currentProject.todoManager.removeTodo(id);

    cycleTodos(pm, dm);

    saveProjectManager(pm)
}