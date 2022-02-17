import { Col, Container, Row } from "react-bootstrap";
import ProjectItem from "./ProjectItem/ProjectItem";

// import classes from "./ProjectsList.module.css";

const ProjectsList = (props) => {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
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
      </Row>
    </Container>
  );
};

export default ProjectsList;
