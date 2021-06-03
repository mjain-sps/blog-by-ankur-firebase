const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//Notification Create Functions
const createNotification = async (notification) => {
  await admin.firestore().collection("notifications").add(notification);
};

exports.blogCreated = functions.firestore
  .document("posts/{postID}")
  .onCreate((doc) => {
    const notification = {
      content: "Added a New Post",
      time: admin.firestore.FieldValue.serverTimestamp(),
      postID: doc.id,
    };
    return createNotification(notification);
  });