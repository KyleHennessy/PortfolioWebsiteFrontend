import {
  FloatingLabel,
  Form,
  Button,
  Alert,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
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
  useEffect(() => {
    if (props.created.id) {
      const timer = setTimeout(() => {
        // Auto-hide after 3 seconds
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [props.created.id]);

  return (
    <Form onSubmit={submitHandler} className="message-form">
      <Form.Group className="mb-3" controlId="formName">
        <FloatingLabel controlId="floatingName" label="Name">
          <Form.Control
            required
            type="text"
            onChange={nameInputChangeHandler}
            placeholder="Enter name"
            value={enteredName}
            className={!enteredNameIsValid ? 'is-invalid' : ''}
          />
          {!enteredNameIsValid && (
            <Alert variant="danger" className="mt-2">
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
            className={!enteredEmailIsValid ? 'is-invalid' : ''}
          />
          {!enteredEmailIsValid && (
            <Alert variant="danger" className="mt-2">
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
            className={!enteredMessageIsValid ? 'is-invalid' : ''}
          />
          {!enteredMessageIsValid && (
            <Alert variant="danger" className="mt-2">
              Your message must not exceed 500 characters
            </Alert>
          )}
        </FloatingLabel>
      </Form.Group>
      <Row>
        <Col className="d-flex align-items-center gap-3">
          {!props.loading ? (
            <Button variant="success" type="submit" size="lg">
              Send Message
            </Button>
          ) : (
            <>
              <Spinner animation="border" role="status" variant="primary" />
              <span className="text-muted">Sending...</span>
            </>
          )}
          {props.created.id && (
            <AiFillCheckCircle 
              className="fadeIn" 
              style={{ 
                height: "30px", 
                width: "30px", 
                color: "var(--primary-color)",
                animation: "scaleIn 0.3s ease-out"
              }} 
            />
          )}
        </Col>
      </Row>

      {props.error && (
        <Alert variant="danger" className="mt-3">
          Something went wrong, please try again
        </Alert>
      )}
    </Form>
  );
};

export default MessageForm;
