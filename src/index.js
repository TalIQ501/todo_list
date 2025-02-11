import { displayManager } from './components/displayManager';
import { projectManager } from './components/projectManager';
import { cycleProjects } from './components/cycleProjects';
import { cycleTodos } from './components/cycleTodos';
import { formHandlerAddProject } from './components/formHandlerAddProject';

import './styles.css';
import { formHandlerTodo } from './components/formHandlerAddTodo';

const pm = projectManager();
const dm = displayManager();

const dialogProject = document.getElementById('dialog-project');
const dialogTodo = document.getElementById('dialog-todo');

const btnAddProject = document.getElementById('btn-add-project');
btnAddProject.addEventListener('click', () => dialogProject.showModal());

const btnCloseProject = document.getElementById('dialog-project-close');
btnCloseProject.addEventListener('click', () => dialogProject.close());

const btnAddTodo = document.getElementById('btn-add-todo');
btnAddTodo.addEventListener('click', () => dialogTodo.showModal());

const btnCloseTodo = document.getElementById('dialog-todo-close');
btnCloseTodo.addEventListener('click', () => dialogTodo.close());

const formProject = document.getElementById('form-project');
formProject.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newProject = formHandlerAddProject(formData, pm);

    pm.addProject(newProject);

    dialogProject.close();

    cycleProjects(pm, dm);
})

const formTodo = document.getElementById('form-todo')
formTodo.addEventListener('submit', e => {
    e.preventDefault();

    const currentProj = pm.getCurrentProject();

    const formData = new FormData(e.target);

    const newTodo = formHandlerTodo(formData, currentProj);

    currentProj.todoManager.addTodo(newTodo);

    dialogTodo.close();

    cycleTodos(currentProj, dm);
})

const defaultProj = pm.createProject();
defaultProj.changeProjectName('Todo App');

const defaultTodo = defaultProj.todoManager.createTodo();
defaultTodo.changeTitle('Hello!');
defaultTodo.changeDescription('Enter your todos here!');

defaultProj.todoManager.addTodo(defaultTodo);

pm.addProject(defaultProj);
pm.changeCurrentProject(defaultProj.getID(), pm);

cycleProjects(pm, dm);

cycleTodos(pm.getCurrentProject(), dm);

