import MessageForm from "./MessageForm";
import useHttp from "../../hooks/use-http";

const NewMessage = (props) => {
  const { isLoading, error, sendRequest: sendMessageRequest } = useHttp();

  const createMessage = (nameText, emailText, messageText, messageData) => {
    const generatedId = messageData.id;
    const createdMessage = {
      id: generatedId,
      name: nameText,
      email: emailText,
      message: messageText,
    };

    props.onAddMessage(createdMessage);
  };

  const enterMessageHandler = async (nameText, emailText, messageText) => {
    sendMessageRequest(
      {
        url: "https://localhost:7277/api/Messages",
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
      <MessageForm onEnterMessage={enterMessageHandler} loading={isLoading} error={error}/>
  )
};

export default NewMessage;
