import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  OverlayTrigger,
  Tooltip,
  Image,
  Breadcrumb,
} from "react-bootstrap";

import { useState } from "react";

import { Link } from "react-router-dom";

import classes from "./CreateUpdateProject.module.css";

const CreateUpdateProject = (props) => {
  const [enteredTitle, setInputTitle] = useState("");
  const [enteredSummary, setInputSummary] = useState("");
  const [enteredDescription, setInputDescription] = useState("");
  const [enteredThumbnail, setInputThumbnail] = useState("");
  const [enteredPreview, setInputPreview] = useState("");
  const [enteredDemo, setInputDemo] = useState("");
  const [enteredDetailImage1, setInputDetailImage1] = useState("");
  const [enteredDetailImage2, setInputDetailImage2] = useState("");
  const [enteredSourceCode, setInputSourceCode] = useState("");
  const [enteredSkills, setInputSkills] = useState([]);

  const titleInputChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const summaryInputChangeHandler = (event) => {
    setInputSummary(event.target.value);
  };
  const descriptionInputChangeHandler = (event) => {
    setInputDescription(event.target.value);
  };
  const thumbnailInputChangeHandler = (event) => {
    setInputThumbnail(event.target.value);
  };
  const previewInputChangeHandler = (event) => {
    setInputPreview(event.target.value);
  };
  const demoInputChangeHandler = (event) => {
    setInputDemo(event.target.value);
  };
  const detailImage1InputChangeHandler = (event) => {
    setInputDetailImage1(event.target.value);
  };
  const detailImage2InputChangeHandler = (event) => {
    setInputDetailImage2(event.target.value);
  };
  const sourceCodeInputChangeHandler = (event) => {
    setInputSourceCode(event.target.value);
  };
  const skillsInputChangeHandler = (event) => {
    setInputSkills(event.target.value);
  };

  const [isGifShown, setIsGifShown] = useState(false);

  const showGifHandler = () => {
    setIsGifShown(true);
  };
  const hideGifHandler = () => {
    setIsGifShown(false);
  };
  return (
    <section id="createProject">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/admin" }}>
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/manage-projects" }}>
            Manage Projects
          </Breadcrumb.Item>
          <Breadcrumb.Item active>CreateProject</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col>
          
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="projectTitle">
                    <FloatingLabel
                      controlId="floatingProjectTitle"
                      label="Title"
                    >
                      <Form.Control
                        required
                        onChange={titleInputChangeHandler}
                        type="text"
                        placeholder="Enter Title"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="projectSummary">
                    <FloatingLabel
                      controlId="floatingProjectSummary"
                      label="Summary"
                    >
                      <Form.Control
                        required
                        onChange={summaryInputChangeHandler}
                        type="text"
                        placeholder="Enter Summary"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="projectDescription">
                    <FloatingLabel
                      controlId="floatingDescription"
                      label="Description"
                    >
                      <Form.Control
                        required
                        onChange={descriptionInputChangeHandler}
                        type="text"
                        placeholder="Enter Description"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="projectThumbnailUrl">
                    <FloatingLabel
                      controlId="floatingThumbnailUrl"
                      label="Thumbnail"
                    >
                      <Form.Control
                        required
                        onChange={thumbnailInputChangeHandler}
                        type="url"
                        placeholder="Enter Thumbnail Url"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="projectPreviewUrl">
                    <FloatingLabel
                      controlId="floatingPreviewUrl"
                      label="Preview"
                    >
                      <Form.Control
                        required
                        onChange={previewInputChangeHandler}
                        type="url"
                        placeholder="Enter Preview Url"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="projectDemoUrl">
                    <FloatingLabel controlId="floatingDemoUrl" label="Demo">
                      <Form.Control
                        required
                        onChange={demoInputChangeHandler}
                        type="url"
                        placeholder="Enter Demo Url"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="projectDetailImageUrl1"
                  >
                    <FloatingLabel
                      controlId="floatingDetailImageUrl1"
                      label="DetailImage1"
                    >
                      <Form.Control
                        required
                        onChange={detailImage1InputChangeHandler}
                        type="url"
                        placeholder="Enter Detail Image Url 1"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="projectDetailImageUrl2"
                  >
                    <FloatingLabel
                      controlId="floatingDetailImageUrl2"
                      label="DetailImage2"
                    >
                      <Form.Control
                        required
                        onChange={detailImage2InputChangeHandler}
                        type="url"
                        placeholder="Enter Detail Image Url 2"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="projectSourceCodeUrl">
                    <FloatingLabel
                      controlId="floatingSourceCodeUrl"
                      label="Source Code"
                    >
                      <Form.Control
                        required
                        onChange={sourceCodeInputChangeHandler}
                        type="url"
                        placeholder="Enter Source Code Url"
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="placeholder for skills"
                    onChange={skillsInputChangeHandler}
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className={classes.card}
              onMouseEnter={showGifHandler}
              onMouseLeave={hideGifHandler}
            >
              {isGifShown && (
                <Card.Img
                  className={classes.preview}
                  id={classes.preview}
                  alt="preview"
                  src={enteredPreview}
                />
              )}
              {!isGifShown && (
                <Card.Img
                  className={classes.cardImage}
                  src={enteredThumbnail}
                  alt="thumbnail"
                />
              )}
              <Card.Body>
                <Card.Title>{enteredTitle}</Card.Title>
                <Card.Text>{enteredSummary}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <h1>{enteredTitle}</h1>
          <Card className={classes.images}>
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Image
                  src={enteredDemo}
                  height={535}
                  width={900}
                  className={classes.detailImages}
                  rounded={true}
                />
              </Col>
              <Col>
                <Row xs={1} md={1} className={`g-4 ${classes.details}`}>
                  <Col xs>
                    <Image
                      src={enteredDetailImage1}
                      height={255}
                      width={600}
                      className={classes.detailImages}
                      rounded={true}
                    />
                  </Col>
                  <Col xs>
                    <Image
                      src={enteredDetailImage2}
                      height={255}
                      width={600}
                      className={classes.detailImages}
                      rounded={true}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>

          <Card>
            <Card.Body>
              <Card.Text>{enteredDescription}</Card.Text>
              <Card.Text>Project Links:</Card.Text>
              <a href={enteredSourceCode}>
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
                {/* {props.skillsUsed?.map((skill) => (
                  <Col xs key={skill.id}>
                    <Card className={classes.skills}>{skill.title}</Card>
                  </Col>
                ))} */}
                <Col>
                  <p>Skills placeholder</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default CreateUpdateProject;
