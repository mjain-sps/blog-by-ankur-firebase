import React from "react";
import SigninComponent from "../../Components/AuthComponents/SignIn/signin.components";

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

//importing connect with react-redux
import { connect } from "react-redux";

//import actions required to trigger google sign in
import { googleSignInAction } from "../../Actions/auth.actions";

//importing Loading Components and Messages components for loading state and notifications
import LoadingComponent from "../../Components/Loader/loader.component";
import Messages from "../../Components/Notifications/messages.component";
//Main Component starts
class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAuthOptions: null,
    };
  }
  handleGoogleSignIn = async () => {
    //dispatching the action to login with Google here.
    //I have not made a separate component for Google Sign in.
    //Hence coding here only.
    //But for sign in with email & password, there is a separate component, its actions are dispatched from there only
    this.props.googleSignInAction();
  };

  //to check if the user is already logged in or not
  componentDidUpdate() {
    const { user } = this.props.currentUser;
    if (user) {
      this.props.history.push("/");
    }
  }
  render() {
    const { loading, error } = this.props.currentUser;
    return (
      <>
        {loading ? (
          <LoadingComponent />
        ) : (
          <AuthScreenContainer>
            {error && <Messages>{error}</Messages>}
            <AuthScreenInfoDiv>
              <h1>Log In</h1>
              <h5>Explore high quality reading content.</h5>
              <p>
                Enlighten your senses with original throughts and facinating
                content relevant
              </p>
            </AuthScreenInfoDiv>
            <AuthScreenDivider />
            <AuthScreenAuthOptionsDiv>
              <GoogleSignInContainer onClick={this.handleGoogleSignIn}>
                <span>
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
                <span className="google-container-title">
                  Continue with Google
                </span>
              </GoogleSignInContainer>
              <SigninComponent />
            </AuthScreenAuthOptionsDiv>
          </AuthScreenContainer>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  googleSignInAction: () => dispatch(googleSignInAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
