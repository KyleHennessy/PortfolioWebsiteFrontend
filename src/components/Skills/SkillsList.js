import { Col, Container, Row } from "react-bootstrap";
import SkillItem from "./SkillItem/SkillItem";

const SkillsList = (props) => {
  return (
    <Container>
      <Row xs={2} md={2} className="g-4">
        {props.skills.map((skill) => (
          <Col xs key={skill.id}>
            <SkillItem key={skill.id} id={skill.id} title={skill.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsList;
