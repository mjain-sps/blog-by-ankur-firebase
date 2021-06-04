import React from "react";
import {
  AuthContainer,
  AuthTitle,
  AuthInput,
  AuthForm,
  AuthLabel,
  AuthFormControl,
} from "./signin.styles";

import ButtonComponent from "../../Button/button.component";
import { isUserAuthenticated } from "../../../Firebase/db";
class SigninComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      focusElement: "",
      email: "",
      password: "",
    };
  }
  //Defining all the functions here

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleFocus = (e) => {
    const { name } = e.target;
    this.setState({ focusElement: name });
  };

  handleLogin = async (e) => {
    if (!this.state.email || !this.state.password) {
      alert("Please fill the details. ");
    } else {
      const { email, password } = this.state;
      const user = await isUserAuthenticated(email, password);
    }
    console.log(e);
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
              <AuthLabel
                htmlFor="email"
                value={this.state.email}
                name="email"
                focus={this.state.focusElement}
              >
                Enter Email
              </AuthLabel>
              <AuthInput
                type="email"
                id="email"
                name="email"
                onFocus={this.handleFocus}
                onChange={this.handleInputChange}
              />
            </AuthFormControl>

            <AuthFormControl>
              <AuthLabel
                htmlFor="password"
                name="password"
                value={this.state.password}
                focus={this.state.focusElement}
              >
                Enter Password
              </AuthLabel>
              <AuthInput
                type="password"
                name="password"
                id="password"
                onFocus={this.handleFocus}
                onChange={this.handleInputChange}
              />
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
        </AuthContainer>
      </>
    );
  }
}

export default SigninComponent;
