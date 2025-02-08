export const projectManager = () => {

    const projects = [];

    const getProjects = () => projects;

    const createProject = () => {
        let project = '';
        
        const tasks = [];

        const getProjectName = () => project;

        const changeProjectName = (input) => project = input;
    
        const getTasks = () => tasks;
    
        const addTask = (task) => tasks.push(task);
    
        const removeTask = (task) => tasks = tasks.filter(!task);

        return { getProjectName, changeProjectName, getTasks, addTask, removeTask };
    }

    const getProject = (select) => projects.filter(project => project.getProjectName() === select)

    const addProject = (project) => projects.push(project);

    return { getProjects, getProject, createProject, addProject };
}