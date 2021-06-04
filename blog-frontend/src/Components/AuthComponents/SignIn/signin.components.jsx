import React from "react";
import { Link } from "react-router-dom";
import {
  AuthContainer,
  AuthTitle,
  AuthInput,
  AuthForm,
  AuthFormControl,
  AuthLabel,
} from "../signin.styles";

import ButtonComponent from "../../Button/button.component";
import { isUserAuthenticated } from "../../../Firebase/db";

//Main component starts here
class SigninComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  //Defining all the functions here

  handleLogin = async (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Please fill the details. ");
    } else {
      const { email, password } = this.state;
      const user = await isUserAuthenticated(email, password);
      console.log(user);
    }
  };
  //Main Component render starts here
  render() {
    return (
      <>
        <AuthContainer>
          <AuthTitle>
            <span>Sign In</span>
          </AuthTitle>

          <AuthForm>
            <AuthFormControl>
              <AuthInput
                type="email"
                id="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <AuthLabel htmlFor="email">Enter Email</AuthLabel>
            </AuthFormControl>

            <AuthFormControl>
              <AuthInput
                type="password"
                id="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <AuthLabel>Password</AuthLabel>
            </AuthFormControl>
            <ButtonComponent
              type="submit"
              onClick={this.handleLogin}
              theme="primary"
              width="50"
            >
              Login
            </ButtonComponent>
          </AuthForm>
          <h5>
            Not a user <Link to="/signup">Sign up</Link>
          </h5>
        </AuthContainer>
      </>
    );
  }
}

export default SigninComponent;
