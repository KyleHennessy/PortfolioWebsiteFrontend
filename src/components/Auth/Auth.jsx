import { useContext } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../store/auth-context";
import AuthForm from "./AuthForm";
import apiUrlObject from '../../api.json';

const Auth = () => {
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;

  const { isLoading, error, sendRequest: sendAuthRequest } = useHttp();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const loginAdmin = (emailText, passwordText, loginData) => {
    const returnedToken = loginData.token;
    const expirationBeforeAddHour = new Date(loginData.expires);
    const expirationTime = new Date(expirationBeforeAddHour.setHours(expirationBeforeAddHour.getHours() + 1));
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
          "Ocp-Apim-Subscription-Key": apiKey
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
