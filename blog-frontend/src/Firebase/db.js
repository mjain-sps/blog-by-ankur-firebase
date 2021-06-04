import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const fireBaseConfig = {
  apiKey: "AIzaSyDqXPoJNlK0uZQyPbfph5ppA-qTdEzKesk",
  authDomain: "blog-by-ankur-dev.firebaseapp.com",
  projectId: "blog-by-ankur-dev",
  storageBucket: "blog-by-ankur-dev.appspot.com",
  messagingSenderId: "710639076600",
  appId: "1:710639076600:web:b80a61135cf5fd1fc6e70d",
};

const firebase = Firebase.initializeApp(fireBaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

//We are setting up the authentication functions here

//Function which takes care of the sign in process
export const isUserAuthenticated = async (email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    return error.message;
  }
};
export default firebase;
