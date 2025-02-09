export const displayManager = () => {

    const displayTodo = (targetDiv, todo) => {
        const title = todo.getTitle();
        const description = todo.getDescription();
        const dueDate = todo.getDueDate();
        const completion = todo.getComplete();

        const dueDateString = () => {
            const year = dueDate.getFullYear();
            const month = dueDate.getMonth() + 1;
            const day = dueDate.getDate();
            return `${year}/${month}/${day}`;
        }

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const titleDiv = document.createElement('p');
        titleDiv.classList.add('title');
        titleDiv.textContent = title;

        const descriptionDiv = document.createElement('p');
        descriptionDiv.classList.add('description');
        descriptionDiv.textContent = description;

        const dueDateDiv = document.createElement('div');
        dueDateDiv.classList.add('due-date');
        dueDateDiv.textContent = dueDateString();

        todoDiv.appendChild(titleDiv);
        todoDiv.appendChild(descriptionDiv);
        todoDiv.appendChild(dueDateDiv);

        targetDiv.appendChild(todoDiv);
    }

    const displayProjectSidebar = (targetDiv, project) => {
        const projectName = project.getProjectName();

        const projectDiv = document.createElement('p');
        projectDiv.setAttribute('id', projectName.toLowerCase())
        projectDiv.classList.add('project-sidebar');
        projectDiv.textContent = projectName;

        targetDiv.appendChild(projectDiv);
    }

    return { displayTodo, displayProjectSidebar }
}