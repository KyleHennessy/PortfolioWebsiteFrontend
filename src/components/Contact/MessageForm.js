import {
  FloatingLabel,
  Form,
  Button,
  Alert,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const MessageForm = (props) => {
  const [enteredName, setInputName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const [enteredEmail, setInputEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

  const [enteredMessage, setInputMessage] = useState("");
  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setInputMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "" || enteredName.trim().length > 100) {
      setEnteredNameIsValid(false);

      return;
    }
    setEnteredNameIsValid(true);

    if (
      enteredEmail.trim() === "" ||
      !enteredEmail.trim().includes("@") ||
      enteredEmail.trim().length > 100
    ) {
      setEnteredEmailIsValid(false);
      return;
    }
    setEnteredEmailIsValid(true);

    if (enteredMessage.trim() === "" || enteredMessage.trim().length > 500) {
      setEnteredMessageIsValid(false);
      return;
    }
    setEnteredMessageIsValid(true);

    if (
      enteredNameIsValid === true &&
      enteredEmailIsValid === true &&
      enteredMessageIsValid === true
    ) {
      props.onEnterMessage(enteredEmail, enteredName, enteredMessage);
      setInputName("");
      setInputEmail("");
      setInputMessage("");
    }

  
  };
  const checkLoaded = document.getElementById("checkLogo");
  const [fade, setFade] = useState('fadeIn');
  if(checkLoaded){
    setInterval(() => {
      setFade('fadeOut');
    }, 1000);
  }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formName">
        <FloatingLabel controlId="floatingName" label="Name">
          <Form.Control
            required
            type="text"
            onChange={nameInputChangeHandler}
            placeholder="Enter name"
            value={enteredName}
          />
          {!enteredNameIsValid && (
            <Alert variant="danger">
              Your name must not exceed 100 characters
            </Alert>
          )}
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <FloatingLabel controlId="floatingEmail" label="Email">
          <Form.Control
            required
            type="email"
            onChange={emailInputChangeHandler}
            placeholder="Enter email"
            value={enteredEmail}
          />
          {!enteredEmailIsValid && (
            <Alert variant="danger">
              Your email address must not exceed 320 characters
            </Alert>
          )}
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <FloatingLabel controlId="floatingMessage" label="Message">
          <Form.Control
            required
            as="textarea"
            onChange={messageInputChangeHandler}
            placeholder="Leave a message here"
            value={enteredMessage}
            style={{ height: "120px" }}
          />
          {!enteredMessageIsValid && (
            <Alert variant="danger">
              Your message must not exceed 500 characters
            </Alert>
          )}
        </FloatingLabel>
      </Form.Group>
      <Row>
        <Col className="buttonCol">
          {!props.loading ? (
            <Button variant="success" type="submit">
              Send Message
            </Button>
          ) : (
            <Spinner animation="border" role="status" />
          )}
          {props.created.id && (<AiFillCheckCircle id="checkLogo" className={fade} style={{ height: "30px", width: "30px", marginLeft:"20px"}} />)}
        </Col>
      </Row>

      {props.error && (
        <p className="danger">Something went wrong, please try again</p>
      )}
    </Form>
  );
};

export default MessageForm;
