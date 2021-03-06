import {
  Card,
  Row,
  Col,
  Form,
  FloatingLabel,
  OverlayTrigger,
  Tooltip,
  Image,
  Spinner,
  Button,
} from "react-bootstrap";

import { useEffect, useState } from "react";

import useHttp from "../../../../hooks/use-http";

import classes from "./CreateUpdateProject.module.css";
import { useHistory } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const CreateUpdateProjectForm = (props) => {
  const apiUrlObject = require('../../../../api.json');
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;

  const history = useHistory();
  const { isLoading, error, sendRequest: fetchSkills } = useHttp();
  const [loadedSkills, setLoadedSkills] = useState([]);

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

  useEffect(() => {
    if (props.loadedProject) {
      setInputTitle(props.loadedProject.title);
      setInputSummary(props.loadedProject.summary);
      setInputDescription(props.loadedProject.description);
      setInputThumbnail(props.loadedProject.thumbnailUrl);
      setInputPreview(props.loadedProject.previewUrl);
      setInputDemo(props.loadedProject.demoUrl);
      setInputDetailImage1(props.loadedProject.detailImagesUrl[0]);
      setInputDetailImage2(props.loadedProject.detailImagesUrl[1]);
      setInputSourceCode(props.loadedProject.sourceCodeUrl);
      //TODO: Make this work
      // props.loadedProject.skillsUsed.map((skill) => {
      //   setInputSkills((enteredSkills) => [...enteredSkills, skill.title]);
      // });
    }
  }, [props.loadedProject]);

  useEffect(() => {
    const transformSkills = (skillsObj) => {
      const loadedSkills = [];

      for (const skillKey in skillsObj) {
        loadedSkills.push({
          id: skillsObj[skillKey].id,
          title: skillsObj[skillKey].title,
        });
      }
      setLoadedSkills(loadedSkills);
    };
    fetchSkills({ url: `${apiUrl}/api/Skills`, headers:{"Ocp-Apim-Subscription-Key": apiKey} }, transformSkills);
  }, [fetchSkills, apiUrl, apiKey]);

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
    const skillId = event.target.value;
    const selectedSkill = loadedSkills.find(s => s.id === skillId);
    if (event.target.checked) {
      setInputSkills((enteredSkills) => [...enteredSkills, selectedSkill]);
    } else {
      setInputSkills(enteredSkills.filter((s) => s.title !== selectedSkill.title));
    }
  };

  const [isGifShown, setIsGifShown] = useState(false);

  const showGifHandler = () => {
    setIsGifShown(true);
  };
  const hideGifHandler = () => {
    setIsGifShown(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const projectDetails = {
      title: enteredTitle,
      summary: enteredSummary,
      description: enteredDescription,
      thumbnail: enteredThumbnail,
      preview: enteredPreview,
      demo: enteredDemo,
      detailImage1: enteredDetailImage1,
      detailImage2: enteredDetailImage2,
      sourceCode: enteredSourceCode,
      skills: enteredSkills,
    };
    props.onSubmitProject(projectDetails);
    setInputTitle("");
    setInputSummary("");
    setInputDescription("");
    setInputThumbnail("");
    setInputPreview("");
    setInputDemo("");
    setInputDetailImage1("");
    setInputDetailImage2("");
    setInputSourceCode("");
    setInputSkills([]);
    history.replace("/manage-projects");
  };

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="projectTitle">
                  <FloatingLabel controlId="floatingProjectTitle" label="Title">
                    <Form.Control
                      value={enteredTitle}
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
                      value={enteredSummary}
                      required
                      onChange={summaryInputChangeHandler}
                      type="text"
                      as="textarea"
                      style={{height:"150px"}}
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
                      value={enteredDescription}
                      required
                      onChange={descriptionInputChangeHandler}
                      type="text"
                      as="textarea"
                      style={{height:"150px"}}
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
                      value={enteredThumbnail}
                      required
                      onChange={thumbnailInputChangeHandler}
                      type="url"
                      placeholder="Enter Thumbnail Url"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="projectPreviewUrl">
                  <FloatingLabel controlId="floatingPreviewUrl" label="Preview">
                    <Form.Control
                      value={enteredPreview}
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
                      value={enteredDemo}
                      required
                      onChange={demoInputChangeHandler}
                      type="url"
                      placeholder="Enter Demo Url"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="projectDetailImageUrl1">
                  <FloatingLabel
                    controlId="floatingDetailImageUrl1"
                    label="DetailImage1"
                  >
                    <Form.Control
                      value={enteredDetailImage1}
                      required
                      onChange={detailImage1InputChangeHandler}
                      type="url"
                      placeholder="Enter Detail Image Url 1"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="projectDetailImageUrl2">
                  <FloatingLabel
                    controlId="floatingDetailImageUrl2"
                    label="DetailImage2"
                  >
                    <Form.Control
                      value={enteredDetailImage2}
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
                      value={enteredSourceCode}
                      required
                      onChange={sourceCodeInputChangeHandler}
                      type="url"
                      placeholder="Enter Source Code Url"
                    />
                  </FloatingLabel>
                </Form.Group>
                {isLoading && <Spinner animation="border" role="status" />}
                {!isLoading &&
                  loadedSkills.map((skill) => (
                    <Form.Check
                      // TODO: Make this populate based on loaded skills
                      //defaultChecked={enteredSkills.includes(skill.title)}
                      key={skill.id}
                      type="checkbox"
                      value={skill.id}
                      label={skill.title}
                      onClick={skillsInputChangeHandler}
                    />
                  ))}
                {error && <p className="danger">Skills could not be loaded</p>}

                {!props.projectLoading ? (
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                ) : (
                  <Spinner animation="border" role="status" />
                )}
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
              <Card.Text><ReactMarkdown className="markdown">{enteredSummary}</ReactMarkdown></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <h1>{enteredTitle}</h1>
        <Card className={classes.images}>
          <Row xs={1} md={2} className="g-4">
            <Col>
              {enteredDemo && (
                <Image
                  src={enteredDemo}
                  height={535}
                  width={900}
                  className={classes.detailImages}
                  rounded={true}
                />
              )}
              {!enteredDemo && (
                <Image
                  src={require("../../../../assets/placeholder.png")}
                  height={535}
                  width={900}
                  className={classes.detailImages}
                  rounded={true}
                />
              )}
            </Col>
            <Col>
              <Row xs={1} md={1} className={`g-4 ${classes.details}`}>
                <Col xs>
                  {enteredDetailImage1 && (
                    <Image
                      src={enteredDetailImage1}
                      height={255}
                      width={600}
                      className={classes.detailImages}
                      rounded={true}
                    />
                  )}
                  {!enteredDetailImage1 && (
                    <Image
                      src={require("../../../../assets/placeholder.png")}
                      height={255}
                      width={400}
                      className={classes.detailImages}
                      rounded={true}
                    />
                  )}
                </Col>
                <Col xs>
                  {enteredDetailImage2 && (
                    <Image
                      src={enteredDetailImage2}
                      height={255}
                      width={600}
                      className={classes.detailImages}
                      rounded={true}
                    />
                  )}
                  {!enteredDetailImage2 && (
                    <Image
                      src={require("../../../../assets/placeholder.png")}
                      height={255}
                      width={400}
                      className={classes.detailImages}
                      rounded={true}
                    />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>

        <Card>
          <Card.Body>
            <Card.Text><ReactMarkdown>{enteredDescription}</ReactMarkdown></Card.Text>
            <Card.Text>Project Links:</Card.Text>
            {enteredSourceCode && (
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
            )}

            <Card.Text>Skills Used:</Card.Text>
            <Row xs={2} md={5} className="g-4">
              {enteredSkills.map((skill) => (
                <Col xs key={Math.random()}>
                  <Card className={classes.skills}>{skill.title}</Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default CreateUpdateProjectForm;
