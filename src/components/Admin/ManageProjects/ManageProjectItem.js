import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useHistory } from "react-router-dom";

import classes from "./ManageProjectItem.module.css";
import AuthContext from "../../../store/auth-context";
import useHttp from "../../../hooks/use-http";
import { ButtonGroup, Spinner } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ManageProjectItem = (props) => {
  const apiUrlObject = require('../../../api.json');
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;

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
      url: `${apiUrl}/api/Projects/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
        "Ocp-Apim-Subscription-Key": apiKey
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
        <Card.Text><ReactMarkdown className="markdown">{props.summary}</ReactMarkdown></Card.Text>
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
