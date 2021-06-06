import { subHeaderAddTypes } from "../Action-Types/subheader.types";
import firebase from "../Firebase/db";

export const addSubHeaderAction = (subHeaderData) => async (dispatch) => {
  const { name } = subHeaderData;
  try {
    dispatch({ type: subHeaderAddTypes.SUBHEADER_ADD_LOADING });
    const res = await firebase.firestore().collection("subheader").add({
      name,
    });
    console.log(res);
    return res;
  } catch (error) {
    const errorMessage = `${error.code} ### ${error.message}`;
    dispatch({
      type: subHeaderAddTypes.SUBHEADER_ADD_ERROR,
      payload: errorMessage,
    });
  }
};
