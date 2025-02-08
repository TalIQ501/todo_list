const displayManager = () => {
    const displayTask = (targetDiv, task) => {
        const title = task.getTitle();
        const description = task.getDescription();
        const dueDate = task.getDueDate();

        const dueDateString = () => {
            year = dueDate.getFullYear();
            month = dueDate.getMonth() + 1;
            day = dueDate.getDay();
            return `${year}/${month}/${day}`;
        }

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const titleDiv = document.createElement('p');
        titleDiv.classList.add('title');
        titleDiv.textContent = title;

        const descriptionDiv = document.createElement('p');
        descriptionDiv.classList.add('description');
        descriptionDiv.textContent = description;

        const dueDateDiv = document.createElement('div');
        dueDateDiv.classList.add('due-date');
        dueDateDiv.textContent = dueDateString();

        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(descriptionDiv);

        targetDiv.appendChild(taskDiv);
    }

    return { displayTask }
}