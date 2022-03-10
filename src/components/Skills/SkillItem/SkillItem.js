import { Card } from "react-bootstrap";
import classes from "./SkillItem.module.css";

const SkillItem = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className={classes.title}>{props.title}</Card.Title>
        <img
          className={classes.check}
          src={require("../../../assets/check.png")}
          alt=""
        />
      </Card.Body>
    </Card>
  );
};

export default SkillItem;
