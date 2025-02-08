export const projectManager = () => {

    const projects = [];

    const getProjects = () => projects;

    const createProject = () => {
        let project = '';
        
        const todos = [];

        const getProjectName = () => project;

        const changeProjectName = (input) => project = input;
    
        const getTodos = () => todos;
    
        const addTodo = (todo) => todos.push(todo);
    
        const removeTodo = (todo) => todos = todos.filter(!todo);

        return { getProjectName, changeProjectName, getTodos, addTodo, removeTodo };
    }

    const getProject = (select) => projects.filter(project => project.getProjectName() === select)

    const addProject = (project) => projects.push(project);

    return { getProjects, getProject, createProject, addProject };
}