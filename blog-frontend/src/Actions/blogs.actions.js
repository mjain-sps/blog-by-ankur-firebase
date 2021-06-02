import {
  GET_BLOG_SNAPSHOTS_LOADING,
  GET_BLOG_SNAPSHOTS_SUCCESS,
  GET_BLOG_SNAPSHOTS_ERROR,
} from "../Action-Types/blog.types";
import { db } from "../Firebase/db";

export const getBlogSnapShotStart = () => ({
  type: GET_BLOG_SNAPSHOTS_LOADING,
});

export const getBlogSnapShotSuccess = (data) => ({
  type: GET_BLOG_SNAPSHOTS_SUCCESS,
  payload: data,
});

export const getBlogSnapShotError = (error) => ({
  type: GET_BLOG_SNAPSHOTS_ERROR,
  payload: error,
});

export const getBlogSnapShotAsync = () => async (dispatch) => {
  try {
    dispatch(getBlogSnapShotStart());
    let postsArray = [];
    const postsSnapShot = await db.collection("posts").get();
    if (!postsSnapShot.empty) {
      postsArray = postsSnapShot.docs.map((post) => {
        return { id: post.id, title: post.data() };
      });
    }

    dispatch(getBlogSnapShotSuccess(postsArray));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(getBlogSnapShotError(errorMessage));
  }
};
/*
=> (dispatch) => {
  try {
    dispatch(getBlogSnapShotStart());
    const postsSnapShot = db.collection("posts").get();
    const postsArray = postsSnapShot.map((post) => ({
      id: post.id,
      title: post.title,
    }));
    dispatch(getBlogSnapShotSuccess(postsArray));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(getBlogSnapShotError(errorMessage));
  }
};

*/
