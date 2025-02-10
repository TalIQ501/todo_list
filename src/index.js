import { displayManager } from './components/displayManager';
import { projectManager } from './components/projectManager';
import { cycleProjects } from './components/cycleProjects';
import { cycleTodos } from './components/cycleTodos';
import { formHandlerAddProject } from './components/formHandlerAddProject';

import './styles.css';

const pm = projectManager();
const dm = displayManager();

const dialogProject = document.getElementById('dialog-project');
const btnCloseProject = document.getElementById('dialog-project-close');
btnCloseProject.addEventListener('click', () => dialogProject.close());

const btnAddProject = document.getElementById('btn-add-project');
btnAddProject.addEventListener('click', () => dialogProject.showModal())

const formProject = document.getElementById('form-project');
formProject.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newProject = formHandlerAddProject(formData, pm);

    pm.addProject(newProject);

    dialogProject.close();

    cycleProjects(pm, dm);
})

const defaultProj = pm.createProject(pm);
defaultProj.changeProjectName('Todo App');

const defaultTodo = defaultProj.todoManager.createTodo();
defaultTodo.changeTitle('Hello!');
defaultTodo.changeDescription('Enter your todos here!');

defaultProj.todoManager.addTodo(defaultTodo);

pm.addProject(defaultProj);
pm.changeCurrentProject(defaultProj.getID(), pm);

console.log(pm.getCurrentProject())

cycleProjects(pm, dm);

console.log(pm.getCurrentProject())

cycleTodos(pm.getCurrentProject(), dm)



