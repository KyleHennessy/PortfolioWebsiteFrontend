import { Card, Placeholder } from "react-bootstrap";
import classes from "./PlaceholderCard.module.css";

const PlaceholderCard = (props) => {
  let body;

  if (props.isSkill) {
    body = (
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={4} />
        </Placeholder>
      </Card.Body>
    );
  } else {
    body = (
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    );
  }
  return (
    <Card className={classes.card}>
      {body}
      {!props.isSkill && (
        <Card.Footer>
          <Placeholder.Button variant="dark" xs={6} />
        </Card.Footer>
      )}
    </Card>
  );
};

export default PlaceholderCard;
