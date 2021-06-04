import { signInTypes, signupTypes } from "../Action-Types/auth.types";
import { registerUser } from "../Firebase/db";
//Actions regarding Sign Up
export const signUpAction = (userData) => {
  return async (dispatch) => {
    dispatch({ type: signupTypes.SIGN_UP_LOADING });
    const resp = await registerUser();
  };
};
