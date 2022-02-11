import Card from "../UI/Card";
import ProjectItem from "./ProjectItem/ProjectItem";

import classes from "./ProjectsList.module.css";

const DUMMY_PROJECTS = [
  {
    id: "m1",
    name: "Portforlio website using react and .net",
    description:
      "A portfolio website that is used to display all of my past, present and future projects!",
  },
  {
    id: "m2",
    name: "My first game",
    description: "My first ever game created from scratch!",
  },
  {
    id: "m3",
    name: "My first mobile app",
    description: "My first ever mobile app created from scratch!",
  },
];

const ProjectsList = () => {
  const projectsList = DUMMY_PROJECTS.map((project) => (
    <ProjectItem
      key={project.id}
      id={project.id}
      name={project.name}
      description={project.description}
    />
  ));

  return (
    <section className={classes.projects}>
      <Card>
        <ul>
          {DUMMY_PROJECTS.map((project) => (
            <li>
              <ProjectItem
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
              />
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default ProjectsList;
