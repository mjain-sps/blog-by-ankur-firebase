import { getBlog } from "../Action-Types/blog.types";
import firebase from "../Firebase/db";
const db = firebase.firestore();

//Actions Related to GET Blog info from DB
export const getBlogSnapShotStart = () => ({
  type: getBlog.GET_BLOG_SNAPSHOTS_LOADING,
});

export const getBlogSnapShotSuccess = (data) => ({
  type: getBlog.GET_BLOG_SNAPSHOTS_SUCCESS,
  payload: data,
});

export const getBlogSnapShotError = (error) => ({
  type: getBlog.GET_BLOG_SNAPSHOTS_ERROR,
  payload: error,
});

export const getBlogSnapShotAsync = () => async (dispatch) => {
  try {
    dispatch(getBlogSnapShotStart());
    let postsArray = [];
    const postsSnapShot = await db.collection("posts").get();
    if (!postsSnapShot.empty) {
      postsArray = postsSnapShot.docs.map((post) => {
        const {
          title,
          category,
          author,
          blogContent,
          publish,
          uploadedImageURL,
          blogSynopsis,
        } = post.data();
        return {
          id: post.id,
          title,
          category,
          author,
          blogContent,
          publish,
          uploadedImageURL,
          blogSynopsis,
        };
      });
    }

    dispatch(getBlogSnapShotSuccess(...postsArray));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(getBlogSnapShotError(errorMessage));
  }
};
