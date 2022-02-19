import { Card } from "react-bootstrap";

import classes from "./WorkExperienceItem.module.css";

const WorkExperienceItem = (props) => {
  return (
    <Card className={classes.card} >
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>{props.description}</Card.Body>
      {/* <Card.Subtitle>I started this job on XXX</Card.Subtitle> */}
      {props.currentJob && <Card.Footer>I currently work here!</Card.Footer>}
    </Card>
  );
};

export default WorkExperienceItem;
