import { Col, Container, Row, Alert } from "react-bootstrap";
import PlaceholderCard from "../UI/PlaceholderCard";
import SkillItem from "./SkillItem/SkillItem";
import Error from "../UI/Error";

const SkillsList = (props) => {
  let skillList = <Alert variant='warning'>No skills could be found at this time. Please try again later</Alert>

  if(props.skills.length > 0){
    skillList = (
      <Row xs={1} md={3} className="g-4">
        {props.skills.map((skill) => (
          <Col xs key={skill.id}>
            <SkillItem key={skill.id} id={skill.id} title={skill.title} />
          </Col>
        ))}
      </Row>
    );
  }

  let content = skillList;

  if(props.error || props.skills){
    content = <Error></Error>
  }

  if(props.loading){
    content = (
      <Row xs={1} md={3} className="g-4">
        <Col xs>
          <PlaceholderCard isSkill={true} />
        </Col>
        <Col xs>
          <PlaceholderCard isSkill={true} />
        </Col>
        <Col xs>
          <PlaceholderCard isSkill={true} />
        </Col>
      </Row>
    );
  }

  return (
    <Container>
      {content}
    </Container>
  );
};

export default SkillsList;
