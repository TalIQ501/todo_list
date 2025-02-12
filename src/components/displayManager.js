import imgCheckMarkComplete from '../img/check-mark-green-svgrepo-com.svg';
import imgCheckMarkIncomplete from '../img/check-mark-red-svgrepo-com.svg';

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

        const completeDivContainer = document.createElement('div');
        completeDivContainer.classList.add('img-container', 'check-mark-container');
        
        const checkMark = document.createElement('img');

        (() => {completion ?
            checkMark.src = imgCheckMarkComplete :
            checkMark.src = imgCheckMarkIncomplete
        })()

        completeDivContainer.appendChild(checkMark);

        const flexRow = document.createElement('div');
        flexRow.classList.add('flex-row-container');

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details-container');

        detailsContainer.appendChild(titleDiv);
        detailsContainer.appendChild(descriptionDiv);
        detailsContainer.appendChild(dueDateDiv);

        flexRow.appendChild(completeDivContainer);
        flexRow.appendChild(detailsContainer);

        todoDiv.appendChild(flexRow);

        targetDiv.appendChild(todoDiv);
    }

    const displayProjectSidebar = (targetDiv, project) => {
        const projectName = project.getProjectName();
        const projectID = project.getID();

        const projectDiv = document.createElement('p');
        projectDiv.setAttribute('id', `project-${projectID}`);
        projectDiv.classList.add('project-sidebar');
        projectDiv.textContent = projectName;

        targetDiv.appendChild(projectDiv);
    }

    return { displayTodo, displayProjectSidebar }
}