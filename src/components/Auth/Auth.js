import { useContext } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../store/auth-context";
import AuthForm from "./AuthForm";

const Auth = () => {
  const apiUrlObject = require('../../api.json');
  const apiUrl = apiUrlObject.apiUrl
  const { isLoading, error, sendRequest: sendAuthRequest } = useHttp();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const loginAdmin = (emailText, passwordText, loginData) => {
    const returnedToken = loginData.token;
    const expirationTime = new Date(loginData.expires);
    const loggedInUser = {
      token: returnedToken,
      expires: expirationTime,
      email: emailText,
      password: passwordText,
    };
    authCtx.login(loggedInUser.token, loggedInUser.expires);
    history.replace('/admin');

  };

  const enterLoginHandler = async (email, password) => {
    sendAuthRequest(
      {
        url: `${apiUrl}/api/Admin/Authenticate`,
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
