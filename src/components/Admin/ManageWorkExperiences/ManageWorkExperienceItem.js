import { Card, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import classes from "./ManageWorkExperienceItem.module.css";

const ManageWorkExperienceItem = (props) => {
  const history = useHistory();
  const redirectHandler = (path) => {
    history.push(path);
  };

  const startDate = new Date(props.dateStarted);
  const endDate =
    props.dateEnded === null ? "Present" : new Date(props.dateEnded);

  return (
    <Card className={classes.card}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body className="d-flex flex-column">
        <Card.Text>{props.description}</Card.Text>
        {props.skillsUsed && (
          <div className="mt-auto">
            <h4>Skills used:</h4>
            <Row xs={2} md={3} className="g-4">
              {props.skillsUsed.map((skill) => (
                <Col xs key={skill.id}>
                  <Card>{skill.title}</Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
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
      <ButtonGroup>
        <Button>Update</Button>
        <Button variant="danger">Delete</Button>
      </ButtonGroup>
    </Card>
  );
};

export default ManageWorkExperienceItem;
