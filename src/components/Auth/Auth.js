import useHttp from "../../hooks/use-http";
import AuthForm from "./AuthForm";

const Auth = () => {
  const { isLoading, error, sendRequest: sendAuthRequest } = useHttp();

  const enterLoginHandler = async (email, password) => {
    sendAuthRequest({
      url: "https://localhost:7277/api/Admin/Authenticate",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { email: email, password: password },
    });
  };

  return (
    <AuthForm
      onEnterLogin={enterLoginHandler}
      loading={isLoading}
      error={error}
    />
  );
};

export default Auth;
