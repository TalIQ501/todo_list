export const cycleTodos = (project, displayManager) => {
    const todosDiv = document.getElementById('todos');

    project.getTodos().forEach(todo => {
        displayManager.displayTodo(todosDiv, todo);
    })
}