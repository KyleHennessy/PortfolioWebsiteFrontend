import { Card } from "react-bootstrap";

import classes from "./WorkExperienceItem.module.css";

const WorkExperienceItem = (props) => {
  const startDate = new Date(props.dateStarted);
  const endDate =
    props.dateEnded === null ? "Present" : new Date(props.dateEnded);

  return (
    <Card className={classes.card}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>

      {endDate instanceof Date && (
        <Card.Footer>
          {startDate.toLocaleString("default", { month: "long" })}{" "}
          {startDate.getFullYear().toString()} &#8212;{" "}
          {endDate.toLocaleString("default", { month: "long" })}{" "}
          {endDate.getFullYear().toString()}
        </Card.Footer>
      )}
      {typeof endDate === "string" && (
        <Card.Footer>
          {startDate.toLocaleString("default", { month: "long" })}{" "}
          {startDate.getFullYear().toString()} &#8212; {endDate}
        </Card.Footer>
      )}
    </Card>
  );
};

export default WorkExperienceItem;
