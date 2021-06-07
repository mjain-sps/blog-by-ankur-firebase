import { subHeaderAddTypes } from "../Action-Types/subheader.types";
import firebase from "../Firebase/db";
import { resetStateBeforePostAction } from "./blogs.actions";

export const addSubHeaderAction =
  (checkedCategoriesData) => async (dispatch) => {
    const { checked } = checkedCategoriesData;
    const checkedCat = [
      ...new Map(
        checked.map((item) => [item["category"], item.category])
      ).values(),
    ];
    console.log(checkedCat);
    try {
      dispatch({ type: subHeaderAddTypes.SUBHEADER_ADD_LOADING });
      const res = await firebase
        .firestore()
        .collection("subheader")
        .add({
          ...checkedCat,
        });

      dispatch({
        type: subHeaderAddTypes.SUBHEADER_ADD_SUCCESS,
        payload: res.id,
      });
    } catch (error) {
      const errorMessage = `${error.code} ### ${error.message}`;
      dispatch({
        type: subHeaderAddTypes.SUBHEADER_ADD_ERROR,
        payload: errorMessage,
      });
    }
  };
