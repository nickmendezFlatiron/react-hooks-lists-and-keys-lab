import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectsElement = projects.map(project => {
    const {name , about, technologies, id} = project
    return <ProjectItem name={name} about={about} key={id} technologies={technologies}  />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsElement}</div>
    </div>
  );
}

export default ProjectList;
