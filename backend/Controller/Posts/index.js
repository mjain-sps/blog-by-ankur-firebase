//Controller which shows hello world
const firebase = require("../../Firebase/db");
const db = firebase.firestore();

//Controller which will handle GET request to get all posts
const getPosts = async (req, res) => {
  let posts = [];
  const postsSnapshot = await db.collection("posts").get();
  postsSnapshot.forEach((document) =>
    posts.push({
      id: document.id,
      data: document.data(),
    })
  );
  res.json(posts);
};

//Controller which will handle POST request to add new post to the db
const addPost = async (req, res) => {
  console.log("ROUTE HIT with request", req);
  const postsCollectionRef = db.collection("posts").doc();

  const postAdded = await postsCollectionRef.set({
    title: "Test",
  });
  console.log(postAdded);
  res.send("POST request page", postAdded);
};

module.exports = { getPosts, addPost };
