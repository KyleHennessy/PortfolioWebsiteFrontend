import { Card } from "react-bootstrap";
import classes from "./SkillItem.module.css";
import checkImage from "../../../assets/check.png";

const SkillItem = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className={classes.title}>{props.title}</Card.Title>
        <img
          className={classes.check}
          src={checkImage}
          alt=""
        />
      </Card.Body>
    </Card>
  );
};

export default SkillItem;
