import { displayManager } from './components/displayManager';
import { projectManager } from './components/projectManager';
import { cycleProjects } from './components/cycleProjects';
import { todoManager } from './components/todoManager';
import { cycleTodos } from './components/cycleTodos';

import './styles.css';

const pm = projectManager();
const tm = todoManager();
const dm = displayManager();

const defaulTodo = tm.createTodo();
defaulTodo.changeTitle('Hello!');
defaulTodo.changeDescription('Enter your todos here!');

const defaultProj = pm.createProject();
defaultProj.changeProjectName('Todo App')
defaultProj.addTodo(defaulTodo);

pm.addProject(defaultProj);
pm.changeCurrentProject(defaultProj.getProjectName());

console.log(pm.getCurrentProject());

cycleProjects(pm, dm);

cycleTodos(pm.getCurrentProject(), dm)



