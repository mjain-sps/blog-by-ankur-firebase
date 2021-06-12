import {
  subHeaderAddTypes,
  subHeaderViewTypes,
} from "../Action-Types/subheader.types";
import firebase from "../Firebase/db";
import { resetStateBeforePostAction } from "./blogs.actions";

export const addSubHeaderAction =
  (checkedCategoriesData) => async (dispatch) => {
    const { checked } = checkedCategoriesData;
    // const checkedCat = [
    //   ...new Map(
    //     checked.map((item) => [item["category"], item.category, item.id])
    //   ).values(),
    // ];
    // console.log(checkedCat);
    try {
      dispatch({ type: subHeaderAddTypes.SUBHEADER_ADD_LOADING });
      await firebase
        .firestore()
        .collection("subheader")
        .doc("checkedCategories")
        .set({
          ...checked,
        });

      dispatch({
        type: subHeaderAddTypes.SUBHEADER_ADD_SUCCESS,
        payload: "UPDATED SUCCESSFULLY",
      });
    } catch (error) {
      const errorMessage = `${error.code} ### ${error.message}`;

      dispatch({
        type: subHeaderAddTypes.SUBHEADER_ADD_ERROR,
        payload: errorMessage,
      });
    }
  };

//Action to fetch the Subheaders

export const subHeaderGetAction = () => async (dispatch) => {
  try {
    dispatch({ type: subHeaderViewTypes.SUBHEADER_VIEW_LOADING });

    //Make API call to firestore
    let data = null;
    const collectionSnapShot = await firebase
      .firestore()
      .collection("subheader")
      .doc("checkedCategories")
      .get();
    if (collectionSnapShot.exists) {
      data = collectionSnapShot.data();
    }
    dispatch({
      type: subHeaderViewTypes.SUBHEADER_VIEW_SUCCESS,
      payload: Object.values(data),
    });
  } catch (error) {
    const errorMessage = `${error.code} ### ${error.message}`;
    dispatch({
      type: subHeaderViewTypes.SUBHEADER_VIEW_ERROR,
      payload: errorMessage,
    });
  }
};
