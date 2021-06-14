import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  AuthContainer,
  AuthTitle,
  AuthInput,
  AuthForm,
  AuthFormControl,
  AuthLabel,
} from "../signin.styles";

//importing components
import ButtonComponent from "../../Button/button.component";
import LoaderComponent from "../../Loader/loader.component";
import Messages from "../../Notifications/messages.component";

//important sign in Action
import { signInUserAction } from "../../../Actions/auth.actions.js";

//Main component starts here
const SigninComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const currentUserFromState = useSelector((state) => state.user);
  const { loading, error, user } = currentUserFromState;

  const dispatch = useDispatch();
  //To check if user is already logged in
  useEffect(() => {
    if (user) {
      props.history.push("/");
    }
  }, [props.history, user]);

  //Defining all the functions here
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill the details. ");
    } else {
      const userCredentials = { email, password };
      dispatch(signInUserAction(userCredentials));
    }
  };

  //Main Component render starts here
  return loading ? (
    <LoaderComponent />
  ) : (
    <>
      {error && <Messages>{error}</Messages>}
      <AuthContainer>
        <AuthTitle>
          <span>Sign In</span>
        </AuthTitle>

        <AuthForm>
          <AuthFormControl>
            <AuthInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AuthLabel htmlFor="email">Enter Email</AuthLabel>
          </AuthFormControl>

          <AuthFormControl>
            <AuthInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AuthLabel>Password</AuthLabel>
          </AuthFormControl>
          <ButtonComponent
            type="submit"
            onClick={handleLogin}
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
};

export default withRouter(SigninComponent);
