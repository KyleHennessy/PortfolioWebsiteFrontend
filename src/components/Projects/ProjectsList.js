import ProjectItem from "./ProjectItem/ProjectItem";

import classes from "./ProjectsList.module.css";


const ProjectsList = (props) => {

  return (
    <ul className={classes.list}>
      {props.projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;
