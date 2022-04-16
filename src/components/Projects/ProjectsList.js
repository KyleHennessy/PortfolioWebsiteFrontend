import { Col, Container, Row, Alert } from "react-bootstrap";
import PlaceholderCard from "../UI/PlaceholderCard";
import ProjectItem from "./ProjectItem/ProjectItem";

const ProjectsList = (props) => {
  let projectList = <Alert variant='warning'>No projects could be found at this time. Please try again later</Alert>;

  if (props.projects.length > 0) {
    projectList = (
      <Row xs={1} md={3} className="g-4">
        {props.projects.map((project) => (
          <Col xs key={project.id}>
            <ProjectItem
              key={project.id}
              id={project.id}
              title={project.title}
              summary={project.summary}
              thumbnailUrl={project.thumbnailUrl}
              previewUrl={project.previewUrl}
            />
          </Col>
        ))}
      </Row>
    );
  }

  let content = projectList;

  if (props.error) {
    <h2>Something went wrong</h2>;
  }

  if (props.loading) {
    content = (
      <Row md={3} className="g-4">
        <Col xs>
          <PlaceholderCard isSkill={false} />
        </Col>
        <Col xs>
          <PlaceholderCard isSkill={false} />
        </Col>
        <Col xs>
          <PlaceholderCard isSkill={false} />
        </Col>
      </Row>
    );
  }

  return <Container>{content}</Container>;
};

export default ProjectsList;
