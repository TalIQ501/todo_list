export const projectTodos = (project, displayManager) => {
    const todosDiv = document.getElementById('todos');

    project.todoManager.getTodos().forEach(todo => {
        displayManager.displayTodo(todosDiv, todo);
    })
}