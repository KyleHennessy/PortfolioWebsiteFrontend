import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  const [isGifShown, setIsGifShown] = useState(false);

  const showGifHandler = () => {
    setIsGifShown(true);
  };
  const hideGifHandler = () => {
    setIsGifShown(false);
  };

  return (
    <Link to={`/project-details/${props.id}`} onMouseEnter={showGifHandler} onMouseLeave={hideGifHandler}>
      <Card className={classes.card}>
        {isGifShown && (
          <Card.Img
            className={classes.preview}
            id={classes.preview}
            alt="homer"
            src={props.previewUrl}
          />
        )}
        {!isGifShown && (
          <Card.Img
            className={classes.cardImage}
            src={props.thumbnailUrl}
            alt={props.title}
          />
        )}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.summary}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="light">Learn more</Button>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default ProjectItem;
