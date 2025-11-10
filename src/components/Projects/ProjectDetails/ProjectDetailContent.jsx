import {
  Card,
  Col,
  Image,
  Row,
  OverlayTrigger,
  Tooltip,
  Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./ProjectDetailContent.module.css";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ProjectDetailContent = (props) => {
  return (
    <div>
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>
            Projects
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Project Details</Breadcrumb.Item>
        </Breadcrumb>
        
      <h1 className={classes.projectTitle}>{props.title}</h1>
      <Card className={classes.images}>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Image
              src={props.demoUrl}
              height={535}
              width={900}
              className={classes.detailImages}
              rounded={true}
            />
          </Col>
          <Col>
            <Row xs={1} md={1} className={`g-4 ${classes.details}`}>
              {props.detailImagesUrl?.map((imageUrl, index) => (
                <Col xs key={index}>
                  <Image
                    src={imageUrl}
                    height={255}
                    width={600}
                    className={classes.detailImages}
                    rounded={true}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Card>

      <Card className={classes.projectContent}>
        <Card.Body>
          <ReactMarkdown className="markdown">{props.description}</ReactMarkdown>
          {props.sourceCodeUrl && (
            <div className={classes.linksSection}>
              <Card.Text className="mb-3">
                <strong>Project Links:</strong>
              </Card.Text>
              <a href={props.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="bottom"
                  delay={{ show: 10, hide: 0 }}
                  overlay={<Tooltip>Visit my GitHub!</Tooltip>}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                    alt="Visit my GitHub!"
                    className={classes.links}
                  />
                </OverlayTrigger>
              </a>
            </div>
          )}
          {props.skillsUsed && props.skillsUsed.length > 0 && (
            <div className={classes.skillsSection}>
              <h3 className={classes.skillsTitle}>Skills Used:</h3>
              <div className={classes.skills}>
                {props.skillsUsed.map((skill) => (
                  <span key={skill.id} className={classes.skillBadge}>
                    {skill.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectDetailContent;
