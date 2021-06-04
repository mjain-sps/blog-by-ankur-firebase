import React from "react";
import SigninComponent from "../../Components/AuthComponents/SignIn/signin.components";
import { signInWithGoogleFunction } from "../../Firebase/db.js";
import {
  AuthScreenContainer,
  AuthScreenInfoDiv,
  AuthScreenDivider,
  AuthScreenAuthOptionsDiv,
  GoogleSignInContainer,
} from "./auth.screens.js";

//importing brand icons and fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

//Main Component starts
class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAuthOptions: null,
    };
  }
  handleGoogleSignIn = () => {
    signInWithGoogleFunction();
  };
  render() {
    return (
      <AuthScreenContainer>
        <AuthScreenInfoDiv>
          <h1>Log In</h1>
          <h5>Explore high quality reading content.</h5>
          <p>
            Enlighten your senses with original throughts and facinating content
            relevant
          </p>
        </AuthScreenInfoDiv>
        <AuthScreenDivider />
        <AuthScreenAuthOptionsDiv>
          <GoogleSignInContainer onClick={this.handleGoogleSignIn}>
            <span>
              <FontAwesomeIcon icon={faGoogle} />
            </span>
            <span className="google-container-title">Continue with Google</span>
          </GoogleSignInContainer>
          <SigninComponent />
        </AuthScreenAuthOptionsDiv>
      </AuthScreenContainer>
    );
  }
}

export default AuthScreen;
