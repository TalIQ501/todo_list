export const projectManager = () => {

    let projectID = 0;

    const projects = [];

    let currentProject = null;
    const getProjects = () => projects;
    const getCurrentID = () => projectID

    const nextID = () => projectID = projectID + 1;

    const createProject = (pm) => {
        const id = pm.getCurrentID();

        let project = '';

        const todoManagerFunc = () => {

            let todoID = 0;

            const todos = [];

            const getCurrentTodoID = () => todoID;
            const nextTodoID = () => todoID = todoID + 1;

            const createTodo = () => {
                let id = getCurrentTodoID();
                let title = '';
                let description = '';
                let dueDate = new Date();
                let completed = false;

                const getTodoID = () => id;
                const getTitle = () => title;
                const getDescription = () => description;
                const getDueDate = () => dueDate;
                const getComplete = () => completed;

                const changeTitle = (input) => title = input;
                const changeDescription = (input) => description = input;
                const changeDueDate = (input) => dueDate = new Date(input);
                const toggleComplete = () => !taskComplete;

                return { getTodoID, getTitle, changeTitle, getDescription, getComplete, changeDescription, getDueDate, changeDueDate, toggleComplete };
            }

            const getTodos = () => todos;

            const addTodo = (todo) => {
                todos.push(todo);
                nextTodoID();
            };
            
            const removeTodo = (todo) => todos = todos.filter(!todo);

            return { getCurrentTodoID, nextTodoID, createTodo, getTodos, addTodo, removeTodo };
        }

        const todoManager = todoManagerFunc();

        const getID = () => id;

        const getProjectName = () => project;

        const changeProjectName = (input) => project = input;

        return { todoManager, getID, getProjectName, changeProjectName };
    }

    const getProject = id => projects.find(project => project.getID() === id)

    const getProjectFromName = (select) => projects.find(project => project.getProjectName() === select)

    const getCurrentProject = () => currentProject;

    const changeCurrentProject = (targetID) => {
        currentProject = getProject(targetID);
    }

    const addProject = (project) => {
        projects.push(project);
        nextID();
    }

    return {
        getProjects,
        getCurrentID,
        nextID,
        getProject,
        getProjectFromName,
        createProject,
        getCurrentProject,
        changeCurrentProject,
        addProject
    };
}