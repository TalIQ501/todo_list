export const projectManager = () => {

    let latestProjectID = 0;

    const projects = [];

    let currentProject = null;
    const getProjects = () => projects;
    const getLatestID = () => latestProjectID;

    const nextID = () => latestProjectID = latestProjectID + 1;

    const createProject = () => {
        const id = getLatestID();

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
                const toggleComplete = () => completed = !completed;

                //Convert to JSON for localStorage
                const JSONify = () => ({
                    id,
                    title,
                    description,
                    dueDate: dueDate.toISOString(),
                    completed
                })

                return { 
                    getTodoID,
                    getTitle,
                    changeTitle,
                    getDescription,
                    getComplete,
                    changeDescription,
                    getDueDate,
                    changeDueDate,
                    toggleComplete,
                    JSONify
                };
            }

            const getTodos = () => todos;

            const findTodoByID = id => todos.find(todo => todo.getTodoID() === Number(id));

            const addTodo = (todo) => {
                todos.push(todo);
                nextTodoID();
            };

            const updateTodo = (newTodo) => {
                const id = newTodo.getTodoID();
                const index = todos.findIndex(todo => todo.getTodoID() === Number(id))
                todos.splice(index, 1, newTodo);
            }

            const removeTodo = id => {
                const index = todos.findIndex(todo => todo.getTodoID() === Number(id))
                todos.splice(index, 1);
            }

            return { 
                getCurrentTodoID,
                nextTodoID,
                createTodo,
                findTodoByID,
                getTodos,
                addTodo,
                updateTodo,
                removeTodo
            };
        }

        const todoManager = todoManagerFunc();

        const getID = () => id;

        const getProjectName = () => project;

        const changeProjectName = (input) => project = input;

        const JSONify = () => ({
            id,
            project,
            todos: todoManager.getTodos().map(todo => todo.JSONify())
        })

        return { todoManager, getID, getProjectName, changeProjectName, JSONify };
    }

    const findProjectIndex = id => projects.findIndex(project => project.getID() === Number(id))

    const findProjectByID = id => projects.find(project => project.getID() === Number(id))

    const findProjectByName = (select) => projects.find(project => project.getProjectName() === select);

    const updateProject = (newProj) => {
        const id = newProj.getID();
        const index = findProjectIndex(id)
        projects.splice(index, 1, newProj);
    }

    const getCurrentProject = () => currentProject;

    const changeCurrentProject = (targetID) => {
        if (targetID === null) currentProject = null
        currentProject = findProjectByID(targetID);
    }

    const prevProject = currentID => {
        const index = findProjectIndex(currentID);
        let newID;
        if (index <= 0) {
            newID = projects[projects.length - 1].getID();
        } else {
            newID = projects[index - 1].getID();
        }
        changeCurrentProject(newID);
    }

    const nextProject = currentID => {
        const index = findProjectIndex(currentID);
        if (index >= projects.length) {
            const newID = projects[0].getID();
            changeCurrentProject(newID);
        }
        const newID = projects[index + 1].getID();
        changeCurrentProject(newID);
    }

    const addProject = (project) => {
        projects.push(project);
        nextID();
    }

    const removeProject = id => {
        const index = findProjectIndex(id)

        projects.splice(index, 1);
    }

    return {
        getProjects,
        getLatestID,
        nextID,
        findProjectByID,
        findProjectByName,
        updateProject,
        createProject,
        getCurrentProject,
        changeCurrentProject,
        prevProject,
        nextProject,
        addProject,
        removeProject
    };
}