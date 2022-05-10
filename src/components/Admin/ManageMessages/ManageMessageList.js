import { Alert, Button, Spinner, Table } from "react-bootstrap";

const ManageMessageList = (props) => {
  let messageList = (
    <Alert variant="warning">
      No messages could be found at this time. Please try again later
    </Alert>
  );

  if (props.messages.length > 0) {
    messageList = (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Message Content</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.messages.map((message) => (
            <tr key={message.key}>
              <td>{message.key}</td>
              <td>{message.id}</td>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.messageText}</td>
              <td><Button variant="danger">Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  let content = messageList;

  if (props.error) {
    <h2>Something went wrong</h2>;
  }

  if (props.loading) {
    content = <Spinner animation="border" role="status" />;
  }

  return <div>{content}</div>;
};

export default ManageMessageList;
