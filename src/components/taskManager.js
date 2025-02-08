export const taskManager = () => {
    const createTask = () => {
        let title = '';
        let description = '';
        let dueDate = new Date();
    
        const getTitle = () => title;
        const getDescription = () => description;
        const getDueDate = () => dueDate;
    
        const changeTitle = (input) => title = input;
        const changeDescription = (input) => description = input;
        const changeDueDate = (input) => dueDate = new Date(input);
    
        return { getTitle, changeTitle, getDescription, changeDescription, getDueDate, changeDueDate };
    }

    return { createTask };
}