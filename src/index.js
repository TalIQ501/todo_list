import { displayManager } from './components/displayManager';
import { projectManager } from './components/projectManager';
import { projectsDisplay } from './components/projectsDisplay';
import { todoManager } from './components/todoManager';
import './styles.css';

const pm = projectManager();
const tm = todoManager();
const dm = displayManager();

const welcomeProject = pm.createProject();
welcomeProject.changeProjectName('Welcome Project')

const todoOne = tm.createTodo();
todoOne.changeTitle('Hello!');
todoOne.changeDescription('Welcome to the App!');

welcomeProject.addTodo(todoOne);
pm.addProject(welcomeProject);

console.log(pm.getProjects())

projectsDisplay(pm, dm);



