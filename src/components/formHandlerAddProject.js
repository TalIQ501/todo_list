export const formHandlerAddProject = (formData, projectManager) => {
    //Selects the only entry in formData using next
    const projName = formData.entries().next().value[1];

    const newProj = projectManager.createProject(projectManager);
    newProj.changeProjectName(projName);

    return newProj;
}