export const cycleProjects = (projectManager, displayManager) => {
    const projectsDiv = document.getElementById('project-list');

    projectsDiv.innerHTML = '';

    projectManager.getProjects().forEach(project => {
        displayManager.displayProjectSidebar(projectsDiv, project);
    })
}