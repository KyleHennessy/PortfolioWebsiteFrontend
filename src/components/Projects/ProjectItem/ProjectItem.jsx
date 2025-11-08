import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import classes from "./ProjectItem.module.css";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ProjectItem = (props) => {
  const [isGifShown, setIsGifShown] = useState(false);

  const showGifHandler = () => {
    setIsGifShown(true);
  };
  const hideGifHandler = () => {
    setIsGifShown(false);
  };

  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement="top"
      delay={{ show: 10, hide: 0 }}
      overlay={<Tooltip>Click Me!</Tooltip>}
    >
      <Link
        to={`/project-details/${props.id}`}
        onMouseEnter={showGifHandler}
        onMouseLeave={hideGifHandler}
      >
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
            <Card.Text>
              <ReactMarkdown className="markdown">
                {props.summary}
              </ReactMarkdown>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="light">Learn more</Button>
          </Card.Footer>
        </Card>
      </Link>
    </OverlayTrigger>
  );
};

export default ProjectItem;
