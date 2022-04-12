import { Col, Container, Row } from "react-bootstrap";
import WorkExperienceItem from "./WorkExperienceItem/WorkExperienceItem";

const WorkExperienceList = (props) => {
  let workExperienceList = <h2>No work experiences have been found.</h2>;

  if (props.workExperiences.length > 0) {
    workExperienceList = (
      <Row xs={1} md={2} className="g-4">
        {props.workExperiences
          .slice(0)
          .reverse()
          .map((workExperience) => (
            <Col xs key={workExperience.id}>
              <WorkExperienceItem
                key={workExperience.id}
                id={workExperience.id}
                title={workExperience.title}
                description={workExperience.description}
                dateStarted={workExperience.dateStarted}
                dateEnded={workExperience.dateEnded}
                currentJob={workExperience.currentJob}
              />
            </Col>
          ))}
      </Row>
    );
  }

  let content = workExperienceList;

  if(props.error){
    <h2>Something went wrong</h2>
  }

  if(props.loading){
    content = 'Loading Work Experiences...';
  }

  return (
    <Container>
      {content}
    </Container>
  );
};

export default WorkExperienceList;
