import firebase from "../../Firebase/db";
const db = firebase.firestore();

export const postBlogService = async (postData) => {
  try {
    const resp = await db.collection("posts").add({
      ...postData,
    });
    const postAddedRef = await db.collection("posts").doc(resp.id).get();
    const postAddedSnapshot = postAddedRef.data();
    console.log(postAddedSnapshot);
    return postAddedSnapshot;
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    return errorMessage;
  }
};
