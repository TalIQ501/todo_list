import { cycleTodos } from "./cycleLists";

export const projectClickHandler = () => {
    
}

export const checkMarkClickHandler = (todo, pm, dm) => {
    todo.toggleComplete();

    cycleTodos(pm.getCurrentProject(), dm);
}