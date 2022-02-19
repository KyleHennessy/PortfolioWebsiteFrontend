import { Col, Container, Row } from "react-bootstrap";
import WorkExperienceItem from "./WorkExperienceItem/WorkExperienceItem";

const WorkExperienceList = (props) => {
  return (
    <Container>
      {/* {console.log(props)} */}
      <Row xs={1} md={2} className="g-4">
        {props.workExperiences.map((workExperience) => (
          <Col xs key={workExperience.id}>
            <WorkExperienceItem
              key={workExperience.id}
              id={workExperience.id}
              title={workExperience.title}
              description={workExperience.description}
              dateStarted={workExperience.dateStarted}
              currentJob={workExperience.currentJob}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WorkExperienceList;
