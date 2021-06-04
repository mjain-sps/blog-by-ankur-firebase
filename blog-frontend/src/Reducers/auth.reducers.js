import {
  signupTypes,
  signInTypes,
  logoutTypes,
} from "../Action-Types/auth.types";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

//Reducer to Register / SignUP the user and also to Sign IN the user and also logout
export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    //Sign UP Loading
    case signupTypes.SIGN_UP_LOADING:
      return {
        ...state,
        loading: true,
      };
    //sign IN LOADING
    case signInTypes.SIGN_IN_LOADING:
      return {
        ...state,
        loading: true,
      };

    //Logout LOADING
    case logoutTypes.LOGOUT_LOADING:
      return {
        ...state,
        loading: true,
      };
    //Sign Up SUCCESS
    case signupTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    //Sign In SUCCESS
    case signInTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    //Logout SUCESS
    case logoutTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
      };
    //Sign UP ERROR
    case signupTypes.SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //Sign IN ERROR
    case signInTypes.SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //Logout ERROR
    case logoutTypes.LOGOUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
