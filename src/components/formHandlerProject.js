export const formHandlerProject = (formData, projectManager) => {
    //Selects the only entry in formData using next
    const projName = formData.get('input-project-name');

    const newProj = projectManager.createProject();
    newProj.changeProjectName(projName);

    return newProj;
}