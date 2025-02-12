import { cycleTodos } from "./cycleLists.js";

export const projectClickHandler = () => {
    
}

export const checkMarkClickHandler = (todo, pm, dm) => {
    todo.toggleComplete();

    const project = pm.getCurrentProject();

    project.todoManager.updateTodo(todo);

    cycleTodos(pm, dm);
}