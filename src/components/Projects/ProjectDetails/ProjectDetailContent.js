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

const ProjectDetailContent = (props) => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">Projects</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Project Details</Breadcrumb.Item>
      </Breadcrumb>

      <h1>{props.title}</h1>
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

      <Card>
        <Card.Body>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>Project Links:</Card.Text>
          <a href={props.sourceCodeUrl}>
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
          <Card.Text>Skills Used:</Card.Text>
          <Row xs={2} md={5} className="g-4">
            {props.skillsUsed?.map((skill) => (
              <Col xs key={skill.id}>
                <Card className={classes.skills}>{skill.title}</Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectDetailContent;
