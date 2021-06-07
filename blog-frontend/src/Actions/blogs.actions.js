import {
  getBlogTypes,
  postBlogTypes,
  getSpecificBlogTypes,
} from "../Action-Types/blog.types";
import firebase from "../Firebase/db";

//Action to fetch all the blogs from firestore from 'posts' collection
export const getBlogsAction = () => async (dispatch) => {
  try {
    let postsArray = [];
    dispatch({ type: getBlogTypes.GET_BLOG_SNAPSHOTS_LOADING });
    const collectionRef = firebase.firestore().collection("posts");

    const snapShot = await collectionRef.get();
    if (snapShot.empty) {
      postsArray = [];
    } else {
      snapShot.forEach((doc) =>
        postsArray.push({
          id: doc.id,
          ...doc.data(),
        })
      );
    }
    dispatch({
      type: getBlogTypes.GET_BLOG_SNAPSHOTS_SUCCESS,
      payload: postsArray,
    });
  } catch (error) {
    const errorMessage = `${error.code} ### ${error.message}`;
    dispatch({
      type: getBlogTypes.GET_BLOG_SNAPSHOTS_ERROR,
      payload: errorMessage,
    });
  }
};

//action to post the blog into firestore 'posts' collection
export const postBlogAction = (blogData) => async (dispatch) => {
  try {
    dispatch({ type: postBlogTypes.POST_BLOG_SNAPSHOTS_LOADING });
    const res = await firebase
      .firestore()
      .collection("posts")
      .add({ ...blogData });
    dispatch({
      type: postBlogTypes.POST_BLOG_SNAPSHOTS_SUCCESS,
      payload: res.id,
    });
  } catch (error) {
    const errorMessage = `${error.code} ### ${error.message}`;
    dispatch({
      type: postBlogTypes.POST_BLOG_SNAPSHOTS_ERROR,
      payload: errorMessage,
    });
  }
};

//action to reset the state just before doing the post blog
export const resetStateBeforePostAction = () => (dispatch) => {
  dispatch({ type: postBlogTypes.POST_BLOG_SNAPSHOT_RESET });
};

//action to fetch a specific Blog
export const getSpecificBlogACtion = (postID) => async (dispatch) => {
  console.log("post id", postID);
  try {
    dispatch({ type: getSpecificBlogTypes.GET_SPECIFIC_BLOG_LOADING });
    //make async requests to firebase to get the specific post
    const res = await firebase
      .firestore()
      .collection("posts")
      .doc(`${postID}`)
      .get();
    const data = res.data();
    //dispatch success action
    dispatch({
      type: getSpecificBlogTypes.GET_SPECIFIC_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = `${error.code} ### ${error.message}`;
    console.log(errorMessage);
    dispatch({
      type: getSpecificBlogTypes.GET_SPECIFIC_BLOG_ERROR,
      payload: errorMessage,
    });
  }
};
