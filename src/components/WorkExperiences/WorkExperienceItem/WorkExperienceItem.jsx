import { Card, Col, Row } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import classes from "./WorkExperienceItem.module.css";

const WorkExperienceItem = (props) => {
  const startDate = new Date(props.dateStarted);
  const endDate =
    props.dateEnded === null ? "Present" : new Date(props.dateEnded);

  return (
    <Card className={classes.card}>
      <Card.Header className={classes.cardHeader}>{props.title}</Card.Header>
      <Card.Body className={classes.cardBody}>
        <ReactMarkdown className={`markdown ${classes.markdown}`}>
          {props.description}
        </ReactMarkdown>
        {props.skillsUsed && props.skillsUsed.length > 0 && (
          <div className="mt-auto">
            <h4 className={classes.skillsTitle}>Skills used:</h4>
            <Row xs={2} md={3} className="g-3">
              {props.skillsUsed.map((skill) => (
                <Col xs key={skill.id}>
                  <Card className={classes.skillCard}>{skill.title}</Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Card.Body>

      {endDate instanceof Date && (
        <Card.Footer className={classes.cardFooter}>
          {startDate.toLocaleString("default", { month: "long" })}{" "}
          {startDate.getFullYear().toString()} &#8212;{" "}
          {endDate.toLocaleString("default", { month: "long" })}{" "}
          {endDate.getFullYear().toString()}
        </Card.Footer>
      )}
      {typeof endDate === "string" && (
        <Card.Footer className={classes.cardFooter}>
          {startDate.toLocaleString("default", { month: "long" })}{" "}
          {startDate.getFullYear().toString()} &#8212; {endDate}
        </Card.Footer>
      )}
    </Card>
  );
};

export default WorkExperienceItem;
