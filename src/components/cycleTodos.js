export const cycleTodos = (project, displayManager) => {
    const todosDiv = document.getElementById('todos');

    todosDiv.innerHTML = ''

    project.todoManager.getTodos().forEach(todo => {
        displayManager.displayTodo(todosDiv, todo);
    })
}