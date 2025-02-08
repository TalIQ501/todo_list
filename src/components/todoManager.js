export const todoManager = () => {
    const createTodo = () => {
        let title = '';
        let description = '';
        let dueDate = new Date();
        let completed = false;
    
        const getTitle = () => title;
        const getDescription = () => description;
        const getDueDate = () => dueDate;
        const getComplete = () => completed;
    
        const changeTitle = (input) => title = input;
        const changeDescription = (input) => description = input;
        const changeDueDate = (input) => dueDate = new Date(input);
        const toggleComplete = () => !taskComplete;
    
        return { getTitle, changeTitle, getDescription, getComplete, changeDescription, getDueDate, changeDueDate, toggleComplete };
    }

    return { createTodo };
}