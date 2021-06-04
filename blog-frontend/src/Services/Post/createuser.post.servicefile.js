import firebase from "../../Firebase/db";

export const createUser = async (user) => {
  try {
    const { displayName: name, email, uid } = user;
    const userObject = { name, email, uid };
    const userRef = await firebase
      .firestore()
      .collection("users")
      .add({
        ...userObject,
      });
    console.log(userRef);
  } catch (error) {}
};
