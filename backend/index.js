const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
//This will implement the colours theme into the terminal
const colors = require("./Color-Theme");
//this will initialise the .dotenv
dotenv.config();
//lets import all the routes
const PostRoutes = require("./Routes/Posts/index");

const PORT = process.env.PORT;

const app = express();
//This will launch the CORS policy
app.use(cors());
//This will launch the body parser which is built in Express
app.use(express.json());

//Lets start using the routes
app.use("/api", PostRoutes);

app.listen(PORT, () => console.log(`APP is running on port ${PORT}`.success));
