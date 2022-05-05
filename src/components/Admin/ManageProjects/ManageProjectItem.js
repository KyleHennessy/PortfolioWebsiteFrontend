import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useHistory } from "react-router-dom";

import classes from "./ManageProjectItem.module.css";

const ManageProjectItem = (props) => {
  const history = useHistory();
  const [isGifShown, setIsGifShown] = useState(false);

  const showGifHandler = () => {
    setIsGifShown(true);
  };
  const hideGifHandler = () => {
    setIsGifShown(false);
  };

  const redirectHandler = (path) => {
    history.push(path);
  };

  return (
    <Card
      className={classes.card}
      onMouseEnter={showGifHandler}
      onMouseLeave={hideGifHandler}
    >
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
        <Button onClick={() => redirectHandler(`/create-update-project/${props.id}`)}>
          Update Project
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ManageProjectItem;
