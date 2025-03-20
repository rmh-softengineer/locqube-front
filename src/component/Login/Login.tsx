import React, { useContext } from "react";
import FacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from "react-facebook-login";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const handleResponse = async (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    if ("status" in response && response.status === "unknown") {
      console.log("Facebook Login Failed:", response);
      return;
    }

    const loginInfo = response as ReactFacebookLoginInfo;

    if (loginInfo.accessToken) {
      try {
        const res = await fetch("http://localhost:8080/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ access_token: loginInfo.accessToken }),
        });

        const data = await res.json();

        authContext?.login(data.token);
        
        history.push("/properties");
      } catch (error) {
        console.error("Error sending token to backend:", error);
      }
    }
  };

  return (
    <FacebookLogin
      appId="640002862073324"
      fields="name,email,picture"
      callback={handleResponse}
      textButton="Login with Facebook"
      icon="fa-facebook"
    />
  );
};

export default Login;
