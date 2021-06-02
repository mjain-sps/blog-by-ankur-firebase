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
  const { title, category } = req.body;
  try {
    db.collection("posts").doc().set({
      title,
      category,
    });

    res.status(200).json({ message: "Blog Added Successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getPosts, addPost };
