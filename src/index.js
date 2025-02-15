import { displayManager } from './components/displayManager';
import { projectManager } from './components/projectManager';
import { cycleProjects } from './components/cycleLists';
import { cycleTodos } from './components/cycleLists';
import { formHandlerProject, formHandlerTodo } from './components/formHandlers';
import { projectFormClickHandler, todoFormClickHandler } from './components/clickHandlers';

import './styles.css';

const pm = projectManager();
const dm = displayManager();

const dialogProject = document.getElementById('dialog-project');
const dialogTodo = document.getElementById('dialog-todo');

const btnAddProject = document.getElementById('btn-add-project');
btnAddProject.addEventListener('click', () => projectFormClickHandler(dialogProject, true));

const btnCloseProject = document.getElementById('dialog-project-close');
btnCloseProject.addEventListener('click', () => dialogProject.close());

const btnAddTodo = document.getElementById('btn-add-todo');
btnAddTodo.addEventListener('click', () => todoFormClickHandler(dialogTodo, 'new', null, pm));

const btnCloseTodo = document.getElementById('dialog-todo-close');
btnCloseTodo.addEventListener('click', () => dialogTodo.close());

const formProject = document.getElementById('form-project');
formProject.addEventListener('submit', e => {
    e.preventDefault(); 

    const formData = new FormData(e.target);

    formHandlerProject(formData, pm)

    dialogProject.close();
    
    cycleProjects(pm, dm);
})

const formTodo = document.getElementById('form-todo')
formTodo.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formHandlerTodo(formData, pm);

    dialogTodo.close();

    cycleTodos(pm, dm);
})

const setDefaultValues = () => {
    const defaultProj = pm.createProject();
    defaultProj.changeProjectName('Todo App');
    
    const defaultTodo = defaultProj.todoManager.createTodo();
    defaultTodo.changeTitle('Hello!');
    defaultTodo.changeDescription('Enter your todos here!');
    
    defaultProj.todoManager.addTodo(defaultTodo);
    
    pm.addProject(defaultProj);
    pm.changeCurrentProject(defaultProj.getID());
}    

const display = () => {
    cycleProjects(pm, dm); 
    cycleTodos(pm, dm);
}

setDefaultValues()
display()
