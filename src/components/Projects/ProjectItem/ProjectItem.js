import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
      <Card className={classes.card}>
        <Card.Img src={props.image} alt={props.title} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="light">Learn more</Button>
        </Card.Footer>
      </Card>
  );
};

export default ProjectItem;
