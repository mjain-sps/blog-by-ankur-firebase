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
// var db = firebase.firestore();
// if (window.location.hostname === "localhost") {
//   db.useEmulator("localhost", 8080);
// }

// firebase.firestore().settings({ timestampsInSnapshots: true });

//We are setting up the authentication functions here

//Function which takes care of the sign in process
export const signInUser = async (email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const errorToBeReturned = { errorCode, errorMessage };
    return errorToBeReturned;
  }
};
//Function whch takes care of sign up process
export const registerUser = async (email, password) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return resp;
};

//Adding Provider for Google Sign IN
export const provider = new Firebase.auth.GoogleAuthProvider();
// [END auth_google_provider_create]

// [START auth_google_provider_scopes]
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// [END auth_google_provider_scopes]

// [START auth_google_provider_params]
provider.setCustomParameters({
  login_hint: "user@example.com",
});

export default firebase;
