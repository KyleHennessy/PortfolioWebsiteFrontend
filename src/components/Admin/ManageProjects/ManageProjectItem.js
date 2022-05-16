import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useHistory } from "react-router-dom";

import classes from "./ManageProjectItem.module.css";
import AuthContext from "../../../store/auth-context";
import useHttp from "../../../hooks/use-http";
import { ButtonGroup, Spinner } from "react-bootstrap";

const ManageProjectItem = (props) => {
  const authCtx = useContext(AuthContext);

  const { isLoading, sendRequest: deleteProjectRequest } = useHttp();

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

  const deleteHandler = async (id) => {
    deleteProjectRequest({
      url: `https://localhost:7277/api/Projects/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
      },
    });

    if (!isLoading) {
      history.go(0);
    }
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
      <ButtonGroup>
        <Button
          onClick={() => redirectHandler(`/create-update-project/${props.id}`)}
        >
          Update
        </Button>
        {isLoading ? (
          <Spinner animation="border" role="status" />
        ) : (
          <Button variant="danger" onClick={() => deleteHandler(props.id)}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Card>
  );
};

export default ManageProjectItem;
