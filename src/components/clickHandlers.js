import { cycleTodos } from "./cycleLists.js";

export const projectClickHandler = (id, pm, dm) => {
    pm.changeCurrentProject(id);

    console.log(`ID is ${id}`)

    cycleTodos(pm, dm);
}

export const checkMarkClickHandler = (todo, pm, dm) => {
    todo.toggleComplete();

    const project = pm.getCurrentProject();

    project.todoManager.updateTodo(todo);

    cycleTodos(pm, dm);
}