//importing action types
import {
  categoryAddForHomeScreenTypes,
  categoryViewForHomeScreenTypes,
} from "../Action-Types/category.homescreen.types";

//importing firebase to make api calls to firestore
import firebase from "../Firebase/db";

//Action to add the categories marked to be displayed on homescreen
export const addCategoryHomeScreenAction = (categoryData) => async (
  dispatch
) => {
  try {
    const { checked } = categoryData;
    dispatch({
      type: categoryAddForHomeScreenTypes.HOMESCREEN_CATEGORY_ADD_LOADING,
    });

    await firebase
      .firestore()
      .collection("homescreen")
      .doc("checkedCategories")
      .set({
        ...checked,
      });

    //dispatching success
    dispatch({
      type: categoryAddForHomeScreenTypes.HOMESCREEN_CATEGORY_ADD_SUCCESS,
      payload: "UPDATED/ADDED SUCCESSFULLY",
    });
  } catch (error) {
    const errorMessage = `${error.code} ### ${error.message}`;
    dispatch({
      type: categoryAddForHomeScreenTypes.HOMESCREEN_CATEGORY_ADD_ERROR,
      payload: errorMessage,
    });
  }
};

//Action to view the categories added / marked as checked ->fetch from database
export const viewCategoriesHomeScreenAction = () => async (dispatch) => {
  try {
    let data = null;
    dispatch({
      type: categoryViewForHomeScreenTypes.HOMESCREEN_CATEGORY_VIEW_LOADING,
    });

    const collectionSnapshot = await firebase
      .firestore()
      .collection("homescreen")
      .doc("checkedCategories")
      .get();
    if (collectionSnapshot.exists) {
      data = collectionSnapshot.data();
    }
    dispatch({
      type: categoryViewForHomeScreenTypes.HOMESCREEN_CATEGORY_VIEW_SUCCESS,
      payload: Object.values(data),
    });
  } catch (error) {
    const errorMessage = `${error.code} ### ${error.message}`;
    dispatch({
      type: categoryViewForHomeScreenTypes.HOMESCREEN_CATEGORY_VIEW_ERROR,
      payload: errorMessage,
    });
  }
};
