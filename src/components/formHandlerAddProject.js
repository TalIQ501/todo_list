export const formHandlerAddProject = (formData, projectManager) => {
    const projName = formData;

    const newProj = projectManager.createProject();
    newProj.changeProjectName(projName);
}