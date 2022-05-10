import { useContext, useEffect, useState } from "react";
import { Alert, Breadcrumb, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../store/auth-context";
import ManageMessageList from "./ManageMessageList";

const ManageMessages = () => {
  const [messages, setMessages] = useState([]);

  const authCtx = useContext(AuthContext);

  const { isLoading, error, sendRequest: fetchMessages } = useHttp();

  useEffect(() => {
    const transformMessages = (messagesObj) => {
      const loadedMessages = [];

      for (const messageKey in messagesObj) {
        loadedMessages.push({
          key: messageKey,
          id: messagesObj[messageKey].id,
          name: messagesObj[messageKey].name,
          email: messagesObj[messageKey].email,
          messageText: messagesObj[messageKey].messageText,
        });
      }
      setMessages(loadedMessages);
    };

    fetchMessages(
      {
        url: "https://localhost:7277/api/Messages",
        headers: { Authorization: `Bearer ${authCtx.token}` },
      },
      transformMessages
    );
  }, [fetchMessages, authCtx.token]);
  return (
    <section id="manageMessages">
      <Container className="px-5 py-10 mx-auto">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/admin" }}>
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Manage Messages</Breadcrumb.Item>
        </Breadcrumb>

        <Alert variant="secondary">
          Here is the list of all messages sent by other people
        </Alert>

        <Row>
          <ManageMessageList
            messages={messages}
            loading={isLoading}
            error={error}
            onFetch={fetchMessages}
          />
        </Row>
      </Container>
    </section>
  );
};

export default ManageMessages;
