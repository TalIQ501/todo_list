import { cycleTodos } from "./cycleLists.js";

export const projectClickHandler = (id, pm, dm) => {
    pm.changeCurrentProject(id);

    cycleTodos(pm, dm);
}

export const projectFormClickHandler = (dialog, isNew=false, projectManager=null) => {
    document.getElementById('project-form-type').value = isNew;
    document.getElementById('project-form-id').value = '';

    dialog.showModal();
}

export const todoFormClickHandler = (dialog, isNew, todo) => {
    console.log(isNew)
    document.getElementById('todo-form-type').value = isNew;
    document.getElementById('todo-form-id').value = '';

    if (isNew === 'new') {
        `Click test passed with ${isNew}`
        document.getElementById('input-todo-title').value = '';
        document.getElementById('input-todo-description').value = '';
    }

    if (isNew !== 'new') {
        console.log(`Click test passed with ${isNew}`)
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