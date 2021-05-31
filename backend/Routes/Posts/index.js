//lets import the controllers

const { getPosts, addPost } = require("../../Controller/Posts");

const express = require("express");
const route = express.Router();

//route which will show all the posts in the DB
route.get("/posts", getPosts);
route.post("/add-post", addPost);

//route which will post the posts to the DB

module.exports = route;
