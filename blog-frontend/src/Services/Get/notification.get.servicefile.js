import firebase from "../../Firebase/db";
const firestore = firebase.firestore();
export const getNotifications = async (content) => {
  const collectionRef = await firestore.collection("notifications").get();
  const requiredNotifications = collectionRef.docs.filter(
    (doc) => doc.data().content === content
  );
  return requiredNotifications;
};
