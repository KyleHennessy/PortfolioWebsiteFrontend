import { Col, Container, Row } from "react-bootstrap";
import SkillItem from "./SkillItem/SkillItem";

const SkillsList = (props) => {
  let skillList = <h2>No skills have been found.</h2>

  if(props.skills.length > 0){
    skillList = (
      <Row xs={2} md={3} className="g-4">
        {props.skills.map((skill) => (
          <Col xs key={skill.id}>
            <SkillItem key={skill.id} id={skill.id} title={skill.title} />
          </Col>
        ))}
      </Row>
    );
  }

  let content = skillList;

  if(props.error){
    <h2>Something went wrong</h2>
  }

  if(props.loading){
    content = 'Loading Skills...';
  }

  return (
    <Container>
      {content}
    </Container>
  );
};

export default SkillsList;
