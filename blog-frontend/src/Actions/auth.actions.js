import {
  signupTypes,
  signInTypes,
  logoutTypes,
} from "../Action-Types/auth.types";
import { registerUser } from "../Firebase/db";
import { createUser } from "../Services/Post/createuser.post.servicefile";
import firebase from "../Firebase/db";
//Actions regarding Sign Up
export const signUpAction = (userData) => {
  return async (dispatch) => {
    dispatch({ type: signupTypes.SIGN_UP_LOADING });
    try {
      const { email: userDataEmail, password } = userData;
      const user = await registerUser(userDataEmail, password);

      //Make a Post request to firestore to create this user which we have to got after create user
      const resp = await createUser(user);

      dispatch({ type: signupTypes.SIGN_UP_SUCCESS, payload: user });
    } catch (error) {
      const errorReturned = {
        errorCode: error.code,
        errorMessage: error.message,
      };
      dispatch({ type: signupTypes.SIGN_UP_ERROR, payload: errorReturned });
    }
  };
};

//Actions related to Sign in the User

export const signInUserAction = (signInData) => {
  return async (dispatch) => {
    //Dispatch Loading
    try {
      dispatch({ type: signInTypes.SIGN_IN_LOADING });

      //make ASYNC call to firebase auth
      const { email, password } = signInData;
      const userCredentials = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const user = userCredentials.user;

      //Dispatch Success Action
      dispatch({ type: signInTypes.SIGN_IN_SUCCESS, payload: user });
    } catch (error) {
      const errorReturned = `${error.code} ${error.message}`;
      dispatch({ type: signInTypes.SIGN_IN_ERROR, payload: errorReturned });
    }
  };
};

//Action to logout the user

export const logoutAction = () => {
  return async (dispatch) => {
    //Dispatch Loading
    try {
      dispatch({ type: logoutTypes.LOGOUT_LOADING });

      //Do async logout using a single line log out command from firebase
      firebase.auth().signOut();
      dispatch({ type: logoutTypes.LOGOUT_SUCCESS });
    } catch (error) {
      const errorReturned = `${error.code} ${error.message}`;
      dispatch({ type: logoutTypes.LOGOUT_ERROR, payload: errorReturned });
    }
  };
};
