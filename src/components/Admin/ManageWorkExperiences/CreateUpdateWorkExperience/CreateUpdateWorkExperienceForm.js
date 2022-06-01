import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useHttp from "../../../../hooks/use-http";
import classes from "./CreateUpdateWorkExperienceForm.module.css";

const CreateUpdateWorkExperienceForm = (props) => {
  const apiUrlObject = require('../../../../api.json');
  const apiUrl = apiUrlObject.apiUrl

  const history = useHistory();
  const { isLoading, error, sendRequest: fetchSkills } = useHttp();
  const [loadedSkills, setLoadedSkills] = useState([]);

  const [enteredTitle, setInputTitle] = useState("");
  const [enteredDescription, setInputDescription] = useState("");
  const [enteredDateStarted, setInputDateStarted] = useState(new Date());
  const [enteredDateEnded, setInputDateEnded] = useState(new Date());
  const [enteredSkills, setInputSkills] = useState([]);

  useEffect(() => {
    if (props.loadedWorkExperience) {
      setInputTitle(props.loadedWorkExperience.title);
      setInputDescription(props.loadedWorkExperience.description);
      setInputDateStarted(new Date(props.loadedWorkExperience.dateStarted));
      setInputDateEnded(new Date(props.loadedWorkExperience.dateEnded));
      //TODO: Make this work
      // props.loadedProject.skillsUsed.map((skill) => {
      //   setInputSkills((enteredSkills) => [...enteredSkills, skill.title]);
      // });
    }
  }, [props.loadedWorkExperience]);

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
    fetchSkills({ url: `${apiUrl}/api/Skills` }, transformSkills);
  }, [fetchSkills, apiUrl]);

  const titleInputChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const descriptionInputChangeHandler = (event) => {
    setInputDescription(event.target.value);
  };
  const dateStartedInputHander = (event) => {
    setInputDateStarted(new Date(event.target.value));
  };
  const dateEndedInputHandler = (event) => {
    setInputDateEnded(new Date(event.target.value));
  };
  const skillsInputChangeHandler = (event) => {
    const skillId = event.target.value;
    const selectedSkill = loadedSkills.find((s) => s.id === skillId);
    if (event.target.checked) {
      setInputSkills((enteredSkills) => [...enteredSkills, selectedSkill]);
      console.log(enteredSkills);
    } else {
      setInputSkills(
        enteredSkills.filter((s) => s.title !== selectedSkill.title)
      );
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let endDate;
    const today = new Date();
    if (
      enteredDateEnded.getDate() === today.getDate() &&
      enteredDateEnded.getMonth() === today.getMonth() &&
      enteredDateEnded.getFullYear() === today.getFullYear()
    ) {
      endDate = null;
    }else{
      endDate = enteredDateEnded;
    }
    const workExperienceDetails = {
      title: enteredTitle,
      description: enteredDescription,
      dateStarted: enteredDateStarted,
      dateEnded: endDate,
      skills: enteredSkills,
    };
    props.onSubmitWorkExperience(workExperienceDetails);
    setInputTitle("");
    setInputDescription("");
    setInputDateStarted(new Date());
    setInputDateEnded(new Date());
    setInputSkills([]);
    history.replace("/manage-work-experiences");
  };

  const todaysDate = new Date().toISOString().split("T")[0];

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="workTitle">
                  <FloatingLabel controlId="floatingTitle" label="Title">
                    <Form.Control
                      value={enteredTitle}
                      required
                      onChange={titleInputChangeHandler}
                      type="text"
                      placeholder="Enter Title"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="workDescription">
                  <FloatingLabel
                    controlId="floatingDescription"
                    label="Description"
                  >
                    <Form.Control
                      value={enteredDescription}
                      required
                      onChange={descriptionInputChangeHandler}
                      type="text"
                      placeholder="Enter Description"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="workDateStarted">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    required
                    name="dateStart"
                    onChange={dateStartedInputHander}
                    type="date"
                    placeholder="Start Date"
                    defaultValue={enteredDateStarted}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="workDateEnded">
                  <Form.Label>
                    End Date &#40;set date to today to set as current job&#41;
                  </Form.Label>
                  <Form.Control
                    required
                    name="dateEnded"
                    onChange={dateEndedInputHandler}
                    type="date"
                    placeholder="End Date"
                    max={todaysDate}
                    
                  />
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

                {!props.workExperienceLoading ? (
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
          <Card className={classes.card}>
            <Card.Header>{enteredTitle}</Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Text>{enteredDescription}</Card.Text>
              <div className="mt-auto">
                <h4>Skills Used:</h4>
                <Row xs={2} md={3} className="g-4">
                  {enteredSkills.map((skill) => (
                    <Col xs key={Math.random()}>
                      <Card className={classes.skills}>{skill.title}</Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card.Body>
            <Card.Footer>
              {enteredDateStarted.toLocaleString("default", { month: "long" })}{" "}
              {enteredDateStarted.getFullYear().toString()} &#8212;{" "}
              {enteredDateEnded.toLocaleString("default", { month: "long" })}{" "}
              {enteredDateEnded.getFullYear().toString()}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CreateUpdateWorkExperienceForm;
