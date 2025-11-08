import { useState } from "react";
import {
  Card,
  Row,
  Col,
  Form,
  FloatingLabel,
  Spinner,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import checkImage from "../../../../assets/check.png";

import classes from "./CreateSkillForm.module.css";

const CreateSkillForm = (props) => {
  const history = useHistory();

  const [enteredTitle, setInputTitle] = useState("");

  const titleInputChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const skillDetails = {
      title: enteredTitle,
    };
    props.onSubmitSkill(skillDetails);

    setInputTitle("");
    history.replace("manage-skills");
  };
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="skillTitle">
                <FloatingLabel controlId="floatingSkillTitle" label="Title">
                  <Form.Control
                    required
                    onChange={titleInputChangeHandler}
                    type="text"
                    placeholder="Enter Title"
                  />
                </FloatingLabel>
              </Form.Group>
              {!props.loading ? (
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              ) : (
                <Spinner animation="border" role="status" />
              )}
            </Form>
          </Card>
        </Col>
        <Col>
          <Card className={classes.preview}>
            <Card.Body>
              <Card.Title className={classes.title}>{enteredTitle}</Card.Title>
              <img
                className={classes.check}
                src={checkImage}
                alt="check"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CreateSkillForm;
