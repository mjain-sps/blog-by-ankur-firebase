import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  AuthContainer,
  AuthTitle,
  AuthInput,
  AuthForm,
  AuthFormControl,
  AuthLabel,
} from "../signin.styles";

import ButtonComponent from "../../Button/button.component";

//importint sign in Action
import { signInUserAction } from "../../../Actions/auth.actions.js";

//Main component starts here
class SigninComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  //To check if user is already logged in
  componentDidUpdate() {
    const { user } = this.props.currentUser;
    if (user) {
      this.props.history.push("/");
    }
  }

  //Defining all the functions here
  handleLogin = async (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Please fill the details. ");
    } else {
      const { email, password } = this.state;
      const userCredentials = { email, password };
      this.props.signInUserAction(userCredentials);
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

const mapDispatchToProps = (dispatch) => ({
  signInUserAction: (userCredentials) =>
    dispatch(signInUserAction(userCredentials)),
});

export default withRouter(connect(null, mapDispatchToProps)(SigninComponent));
