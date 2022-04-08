import { Col, Container, Row } from "react-bootstrap";
import ProjectItem from "./ProjectItem/ProjectItem";

// import classes from "./ProjectsList.module.css";

const ProjectsList = (props) => {
  let projectList = <h2>No projects have been found.</h2>
  
  // console.log(props);

  // return ({projectList})

  if(props.projects.length > 0){
    projectList = (
      <Row xs={1} md={3} className="g-4">
        {props.projects.map((project) => (
            <Col xs key={project.id}>
              <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                thumbnailUrl={project.thumbnailUrl}
                skillsUsed = {project.skillsUsed}
              />
            </Col>
        ))}
      </Row>
    );
  }

  let content = projectList;

  if(props.error){
    <h2>Something went wrong</h2>
  }

  if(props.loading){
    content = 'Loading Projects...';
  }

  return (
    <Container>
      {content}
      {/* <Row xs={1} md={3} className="g-4">
        {props.projects.map((project) => (
            <Col xs key={project.id}>
              <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
              />
            </Col>
        ))}
      </Row> */}

    </Container>
  );
};

export default ProjectsList;
