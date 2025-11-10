import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import classes from "./ProjectItem.module.css";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ProjectItem = (props) => {
  const [isGifShown, setIsGifShown] = useState(false);

  const showGifHandler = () => {
    setIsGifShown(true);
  };
  const hideGifHandler = () => {
    setIsGifShown(false);
  };

  return (
    <Link
      to={`/project-details/${props.id}`}
      className={classes.cardLink}
      onMouseEnter={showGifHandler}
      onMouseLeave={hideGifHandler}
    >
      <Card className={classes.card}>
        <div className={classes.imageContainer}>
          {isGifShown && props.previewUrl && (
            <img
              className={classes.preview}
              alt="preview"
              src={props.previewUrl}
            />
          )}
          {(!isGifShown || !props.previewUrl) && (
            <img
              className={classes.cardImage}
              src={props.thumbnailUrl}
              alt={props.title}
            />
          )}
          <div className={classes.imageOverlay}></div>
        </div>
        <Card.Body className={classes.cardBody}>
          <Card.Title className={classes.cardTitle}>{props.title}</Card.Title>
          <ReactMarkdown className="markdown">
            {props.summary}
          </ReactMarkdown>
        </Card.Body>
        <Card.Footer className={classes.cardFooter}>
          <Button className={classes.learnMoreBtn}>Learn more</Button>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default ProjectItem;
