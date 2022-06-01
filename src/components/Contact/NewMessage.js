import MessageForm from "./MessageForm";
import useHttp from "../../hooks/use-http";
import { useState } from "react";

const NewMessage = () => {
  const apiUrlObject = require('../../api.json');
  const apiUrl = apiUrlObject.apiUrl

  const { isLoading, error, sendRequest: sendMessageRequest } = useHttp();
  const [createdMessage, setCreatedMessage] = useState({});

  const createMessage = (nameText, emailText, messageText, messageData) => {
    const generatedId = messageData.id;
    setCreatedMessage({
      id: generatedId,
      name: nameText,
      email: emailText,
      message: messageText,
    });
    console.log(createdMessage);
  };

  const enterMessageHandler = async (nameText, emailText, messageText) => {
    sendMessageRequest(
      {
        url: `${apiUrl}/api/Messages`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { name: nameText, email: emailText, messageText: messageText },
      },
      createMessage.bind(null, nameText, emailText, messageText)
    );
  };

  return (
    <div>
      <MessageForm
        onEnterMessage={enterMessageHandler}
        loading={isLoading}
        error={error}
        created={createdMessage}
      />
      
    </div>
  );
};

export default NewMessage;
