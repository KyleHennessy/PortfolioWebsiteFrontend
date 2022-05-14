import { Alert, Col, Container, Row } from "react-bootstrap";
import PlaceholderCard from "../../UI/PlaceholderCard";
import ManageWorkExperienceItem from "./ManageWorkExperienceItem";

const ManageWorkExperienceList = (props) => {
  let workExperienceList = (
    <Alert variant="warning">
      No work experiences could be found at this time. Please try again later
    </Alert>
  );

  if (props.workExperiences.length > 0) {
    workExperienceList = (
      <Row xs={1} md={2} className="g-4 text-center">
        {props.workExperiences
          .slice(0)
          .reverse()
          .map((workExperience) => (
            <Col xs key={workExperience.key}>
              <ManageWorkExperienceItem
                id={workExperience.id}
                title={workExperience.title}
                description={workExperience.description}
                dateStarted={workExperience.dateStarted}
                skillsUsed={workExperience.skillsUsed}
                dateEnded={workExperience.dateEnded}
                currentJob={workExperience.currentJob}
              />
            </Col>
          ))}
      </Row>
    );
  }

  let content = workExperienceList;

  if (props.error) {
    <h2>Something went wrong</h2>;
  }

  if (props.loading) {
    content = (
      <Row md={2} className="g-4">
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

export default ManageWorkExperienceList;
