import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useRef } from "react";

const MessageForm = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    if (
      enteredEmail.trim().length > 0 ||
      enteredName.trim().length > 0 ||
      enteredMessage.trim().length > 0
    ) {
      props.onEnterMessage(enteredEmail, enteredName, enteredMessage);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formName">
        <FloatingLabel controlId="floatingName" label="Name">
          <Form.Control
            type="text"
            ref={nameInputRef}
            placeholder="Enter name"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <FloatingLabel controlId="floatingEmail" label="Email">
          <Form.Control
            type="email"
            ref={emailInputRef}
            placeholder="Enter email"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <FloatingLabel controlId="floatingMessage" label="Message">
          <Form.Control
            as="textarea"
            ref={messageInputRef}
            placeholder="Leave a message here"
            style={{ height: "120px" }}
          />
        </FloatingLabel>
      </Form.Group>
      <Button variant="success" type="submit">
        {props.loading ? "Sending..." : "Send Message"}
      </Button>
    </Form>
  );
};

export default MessageForm;
