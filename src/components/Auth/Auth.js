import { useContext } from "react";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../store/auth-context";
import AuthForm from "./AuthForm";

const Auth = () => {
  const { isLoading, error, sendRequest: sendAuthRequest } = useHttp();
  const authCtx = useContext(AuthContext);

  const loginAdmin = (emailText, passwordText, loginData) => {
    const returnedToken = loginData.token;
    const loggedInUser = {
      token: returnedToken,
      email: emailText,
      password: passwordText,
    };
    
    console.log(loggedInUser.token);
    authCtx.login(loggedInUser.token);
  };

  const enterLoginHandler = async (email, password) => {
    sendAuthRequest(
      {
        url: "https://localhost:7277/api/Admin/Authenticate",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { email: email, password: password },
      },
      loginAdmin.bind(null, email, password)
    );
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
