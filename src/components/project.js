const project = () => {
    const tasks = [];

    const getTask = () => task;

    const addTask = (task) => tasks.push(task);

    const removeTask = (task) => tasks = tasks.filter(!task);

    return { getTask, addTask, removeTask };
}