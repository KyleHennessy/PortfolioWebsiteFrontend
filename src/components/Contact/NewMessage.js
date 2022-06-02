import MessageForm from "./MessageForm";
import useHttp from "../../hooks/use-http";
import { useState } from "react";

const NewMessage = () => {
  const apiUrlObject = require('../../api.json');
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;

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
  };

  const enterMessageHandler = async (nameText, emailText, messageText) => {
    sendMessageRequest(
      {
        url: `${apiUrl}/api/Messages`,
        method: "POST",
        headers: {
          // "Access-Control-Request-Headers": "Content-Type,Ocp-Apim-Subscription-Key",
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": apiKey
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
