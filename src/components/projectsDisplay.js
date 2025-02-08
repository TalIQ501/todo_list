export const projectsDisplay = (projectManager, displayManager) => {
    const projectsDiv = document.getElementById('project-list');

    projectManager.getProjects().forEach(project => {
        displayManager.displayProjectSidebar(projectsDiv, project);
    })
}