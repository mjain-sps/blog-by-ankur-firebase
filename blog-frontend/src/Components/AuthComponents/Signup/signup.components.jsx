import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
const Signup = (props) => {
  const { loading, user, error } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      props.history.push("/");
    }
  }, [props.history, user]);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password2 || !password) {
      alert("Cannot leave fields blank. Please fill form completely");
    } else if (password !== password2) {
      alert("password do not match");
    } else {
      const userData = { email, password };
      dispatch(signUpAction(userData));
    }
  };

  return loading ? (
    <LoaderComponent />
  ) : (
    <AuthContainer>
      {error && <Messages>{error}</Messages>}

      <AuthTitle>Signup</AuthTitle>

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

        <AuthFormControl>
          <AuthInput
            type="password"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <AuthLabel>Password Again</AuthLabel>
        </AuthFormControl>

        <ButtonComponent
          type="submit"
          onClick={handleSignup}
          theme="primary"
          width="50"
        >
          Login
        </ButtonComponent>
      </AuthForm>
    </AuthContainer>
  );
};

export default Signup;
