import React from "react";
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
import Messages from "../../Notifications/messages.component";
import LoaderComponent from "../../Loader/loader.component";
//importing Actions
import { signUpAction } from "../../../Actions/auth.actions";

//Main component starts
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      user: null,
    };
  }

  componentDidUpdate() {
    const { user } = this.props.currentUser;
    if (user) {
      this.props.history.push("/");
    }
  }
  //All functions go here

  handleSignup = async (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password2 || !this.state.password) {
      alert("Cannot leave fields blank. Please fill form completely");
    } else if (this.state.password !== this.state.password2) {
      alert("password do not match");
    } else {
      const { email, password } = this.state;
      const userData = { email, password };
      this.props.signUpAction(userData);
    }
  };

  render() {
    const { loading, error } = this.props.currentUser;

    return loading ? (
      <LoaderComponent />
    ) : error ? (
      <Messages>{error}</Messages>
    ) : (
      <AuthContainer>
        <Messages>
          {this.state.errorMessage ||
            (this.state.errorCode &&
              `${this.state.errorCode} #### ${this.state.errorMessage}`)}
        </Messages>
        <AuthTitle>Signup</AuthTitle>

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

          <AuthFormControl>
            <AuthInput
              type="password"
              id="password2"
              value={this.state.password2}
              onChange={(e) => this.setState({ password2: e.target.value })}
            />
            <AuthLabel>Password Again</AuthLabel>
          </AuthFormControl>

          <ButtonComponent
            type="submit"
            onClick={this.handleSignup}
            theme="primary"
            width="50"
          >
            Login
          </ButtonComponent>
        </AuthForm>
      </AuthContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  signUpAction: (user) => dispatch(signUpAction(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
