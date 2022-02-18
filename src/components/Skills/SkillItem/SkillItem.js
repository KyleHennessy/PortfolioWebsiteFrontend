import { Card } from "react-bootstrap";
import classes from "./SkillItem.module.css";

const SkillItem = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SkillItem;
