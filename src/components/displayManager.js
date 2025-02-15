import imgCheckMarkComplete from '../img/check-mark-green-svgrepo-com.svg';
import imgCheckMarkIncomplete from '../img/check-mark-red-svgrepo-com.svg';

import { checkMarkClickHandler, projectClickHandler, todoFormClickHandler } from "./clickHandlers";


export const displayManager = () => {

    const displayTodo = (targetDiv, todo, pm, dm) => {
        const dialog = document.getElementById('dialog-todo');

        const id = todo.getTodoID();
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

        detailsContainer.addEventListener('click', () => todoFormClickHandler(dialog, false, todo, pm))
        completeDivContainer.addEventListener('click', () => checkMarkClickHandler(todo, pm, dm));

        targetDiv.appendChild(todoDiv);
    }

    const displayProjectSidebar = (targetDiv, project, pm, dm) => {
        const dialog = document.getElementById('dialog-project');

        const projectName = project.getProjectName();
        const projectID = project.getID();

        const projectDiv = document.createElement('p');
        projectDiv.setAttribute('id', `project-${projectID}`);
        projectDiv.classList.add('project-sidebar');
        projectDiv.textContent = projectName;

        projectDiv.addEventListener('click', () => projectClickHandler(projectID, pm, dm))

        targetDiv.appendChild(projectDiv);
    }

    return { displayTodo, displayProjectSidebar }
}