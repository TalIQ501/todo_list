import imgCheckMarkComplete from '../img/check-mark-green-svgrepo-com.svg';
import imgCheckMarkIncomplete from '../img/check-mark-red-svgrepo-com.svg';

import imgDelete from '../img/delete-material-icon.svg';
import imgEdit from '../img/edit-material-icon.svg';

import { checkMarkClickHandler, projectClickHandler, projectFormClickHandler, todoFormClickHandler } from "./clickHandlers";


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

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('todo-btn-container');

        const btnCompleteContainer = document.createElement('div');
        btnCompleteContainer.classList.add('img-container', 'btn-icon');
        
        const checkMark = document.createElement('img');

        (() => {completion ?
            checkMark.src = imgCheckMarkComplete :
            checkMark.src = imgCheckMarkIncomplete
        })()

        btnCompleteContainer.appendChild(checkMark);

        const btnDeleteContainer = document.createElement('div');
        btnDeleteContainer.classList.add('img-container', 'btn-icon');

        const btnDeleteImg = document.createElement('img');
        btnDeleteImg.src = imgDelete;

        btnDeleteContainer.appendChild(btnDeleteImg);

        buttonsContainer.appendChild(btnCompleteContainer);
        buttonsContainer.appendChild(btnDeleteContainer);

        const flexRow = document.createElement('div');
        flexRow.classList.add('flex-row-container');

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details-container');

        detailsContainer.appendChild(titleDiv);
        detailsContainer.appendChild(descriptionDiv);
        detailsContainer.appendChild(dueDateDiv);

        flexRow.appendChild(buttonsContainer);
        flexRow.appendChild(detailsContainer);

        todoDiv.appendChild(flexRow);

        detailsContainer.addEventListener('click', () => todoFormClickHandler(dialog, 'edit', todo, pm))
        btnCompleteContainer.addEventListener('click', () => checkMarkClickHandler(todo, pm, dm));

        targetDiv.appendChild(todoDiv);
    }

    const displayProjectSidebar = (targetDiv, project, pm, dm) => {
        const dialog = document.getElementById('dialog-project');

        const projectName = project.getProjectName();
        const projectID = project.getID();

        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('id', `project-${projectID}`);
        projectDiv.classList.add('project-sidebar');

        const projectNameDiv = document.createElement('p');
        projectNameDiv.classList.add('project-name');
        projectNameDiv.textContent = projectName;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('project-btn-container');

        const btnDeleteContainer = document.createElement('div');
        btnDeleteContainer.classList.add('img-container', 'btn-icon');

        const btnDeleteImg = document.createElement('img');
        btnDeleteImg.src = imgDelete;

        btnDeleteContainer.appendChild(btnDeleteImg)

        const btnEditContainer = document.createElement('div');
        btnEditContainer.classList.add('img-container', 'btn-icon');

        const btnEditImg = document.createElement('img');
        btnEditImg.src = imgEdit;

        btnEditContainer.appendChild(btnEditImg);

        buttonsDiv.appendChild(btnEditContainer);
        buttonsDiv.appendChild(btnDeleteContainer);

        projectDiv.appendChild(projectNameDiv);
        projectDiv.appendChild(buttonsDiv);

        projectNameDiv.addEventListener('click', () => projectClickHandler(projectID, pm, dm));
        btnEditContainer.addEventListener('click', () => projectFormClickHandler(dialog, 'edit', project))
        //btnDeleteContainer.addEventListener('click', () => )

        targetDiv.appendChild(projectDiv);
    }

    return { displayTodo, displayProjectSidebar }
}