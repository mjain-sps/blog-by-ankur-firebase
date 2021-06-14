import {
  signupTypes,
  signInTypes,
  logoutTypes,
} from "../Action-Types/auth.types";
import { registerUser } from "../Firebase/db";
import firebase, { provider } from "../Firebase/db";

//Actions regarding Sign Up
export const signUpAction = (userData) => {
  return async (dispatch) => {
    dispatch({ type: signupTypes.SIGN_UP_LOADING });
    try {
      const { email: userDataEmail, password } = userData;
      const { user } = await registerUser(userDataEmail, password);
      if (user) {
        //I want to post the user in users collection in firestore
        const userRef = firebase
          .firestore()
          .collection("users")
          .doc(`${user.uid}`);
        const userSnapShot = await userRef.get();
        if (!userSnapShot.exists) {
          const data = {
            uid: user.uid,
            email: user.email,
          };
          userRef.set(data);
        }
      }
      dispatch({ type: signupTypes.SIGN_UP_SUCCESS, payload: user });
    } catch (error) {
      const errorMessage = `${error.code} ### ${error.message}`;
      dispatch({ type: signupTypes.SIGN_UP_ERROR, payload: errorMessage });
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

//Actions to login using Google, although we are using action types as for sign in with email and password,
//just because the user can be signed in with any of one of the methods
export const googleSignInAction = () => {
  return async (dispatch) => {
    try {
      //Lets first dispatch loading
      dispatch({ type: signInTypes.SIGN_IN_LOADING });
      //Lets make the google Provider call
      const { user } = await firebase.auth().signInWithPopup(provider);
      //Dispatch SUCCESS action
      dispatch({ type: signInTypes.SIGN_IN_SUCCESS, payload: user });
    } catch (error) {
      const errorMessage = `${error.code} ## ${error.message} ## email used to Sign in is ${error.email}`;
      //dispatch error actions
      dispatch({ type: signInTypes.SIGN_IN_ERROR, payload: errorMessage });
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
