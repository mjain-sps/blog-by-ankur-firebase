import React from "react";
import { AuthContainer, AuthTitle } from "./signin.styles";
class SigninComponent extends React.Component {
  render() {
    return (
      <>
        <AuthContainer>
          <AuthTitle>
            <span>Sign In</span>
          </AuthTitle>
        </AuthContainer>
      </>
    );
  }
}

export default SigninComponent;
