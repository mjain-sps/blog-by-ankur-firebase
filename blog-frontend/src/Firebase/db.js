import Firebase from "firebase";
import "firebase/firestore";

const fireBaseConfig = {
  apiKey: "AIzaSyDqXPoJNlK0uZQyPbfph5ppA-qTdEzKesk",
  authDomain: "blog-by-ankur-dev.firebaseapp.com",
  projectId: "blog-by-ankur-dev",
  storageBucket: "blog-by-ankur-dev.appspot.com",
  messagingSenderId: "710639076600",
  appId: "1:710639076600:web:b80a61135cf5fd1fc6e70d",
};

const firebase = Firebase.initializeApp(fireBaseConfig);

const db = firebase.firestore();
export { db };
export default firebase;
