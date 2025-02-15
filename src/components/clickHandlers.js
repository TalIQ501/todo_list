import { cycleProjects, cycleTodos } from "./cycleLists.js";

export const projectClickHandler = (id, pm, dm) => {
    pm.changeCurrentProject(id);

    cycleTodos(pm, dm);
}

export const projectFormClickHandler = (dialog, isNew, project) => {
    document.getElementById('project-form-type').value = isNew;
    document.getElementById('project-form-id').value = '';

    if (isNew === 'new') {
        document.getElementById('input-project-name').value = '';
    }

    if (!(isNew === 'new')) {
        document.getElementById('project-form-id').value = project.getID();
        document.getElementById('input-project-name').value = project.getProjectName();
    }

    dialog.showModal();
}

export const todoFormClickHandler = (dialog, isNew, todo) => {
    document.getElementById('todo-form-type').value = isNew;
    document.getElementById('todo-form-id').value = '';

    if (isNew === 'new') {
        document.getElementById('input-todo-title').value = '';
        document.getElementById('input-todo-description').value = '';
    }

    if (isNew !== 'new') {
        document.getElementById('input-todo-title').value = todo.getTitle();
        document.getElementById('input-todo-description').value = todo.getDescription();
        document.getElementById('todo-form-id').value = todo.getTodoID();
    }
    
    dialog.showModal();
}

export const checkMarkClickHandler = (todo, pm, dm) => {
    todo.toggleComplete();

    const project = pm.getCurrentProject();

    project.todoManager.updateTodo(todo);

    cycleTodos(pm, dm);
}

export const deleteProject = (id, pm, dm) => {
    const currentProject = pm.getCurrentProject();
    const currentID = currentProject.getID();

    pm.removeProject(id);

    cycleProjects(pm, dm);

    if (pm.getProjects().length === 0) {
        dm.emptyProjects();
        return
    }

    if (id === currentID) {
        console.log('Same ID');
        pm.prevProject();
        cycleTodos(pm, dm)
    }
}

export const deleteTodo = (id, pm, dm) => {
    const currentProject = pm.getCurrentProject();

    currentProject.todoManager.removeTodo(id);

    cycleTodos(pm, dm);

    if (currentProject.todoManager.getTodos().length === 0) {
        dm.emptyTodos();
    }
}