// npm init -y
// $ npm i nodemon express mongoose dotenv cors
// start tag in package.json => "start": "nodemon server.js"
// big 3 express (express, app, listen), mongoose, cors

require("dotenv").config();
console.log("Environment Variables:", {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  SECRET: process.env.SECRET,
});
const cookieParser = require("cookie-parser");

// -----> Allows using environment variables from .env file
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");

// Models
const Note = require("./models/note.js");
const User = require("./models/user.js");
const Data = require("./models/data.js");
const Blog = require("./models/blog.js");

// Controllers
const notesController = require("./controllers/notesController.js");
const userController = require("./controllers/userController.js");
const dataController = require("./controllers/dataController.js");
const usersController = require("./controllers/usersControllers.js");
const blogController = require("./controllers/blogController.js");

// Middleware
const authenticateJWT = require("./middleware/auth");
const cors = require("cors");

// Express middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS
app.use(cookieParser()); // Parse cookies

// Initialize database connection
connectToDb();

// -----------------------------------------------------------------------> Routes

// -------------------------------------------------------------------------> USERS

// User authentication routes
app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.post("/logout", usersController.logout);
app.get("/check-auth", authenticateJWT, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// -------------------------------------------------------------------------> Root Route
app.get("/", (req, res) => {
  res.send("This is the root of our server");
});

// -------------------------------------------------------------------------> Notes CRUD Routes

// ---------- Get all Notes
app.get("/notes", notesController.fetchAllNotes);

// ---------- Get a specific Note by ID
app.get("/notes/:id", notesController.fetchNote);

// ---------- Create a Note
app.post("/notes", notesController.createNote);

// ---------- Update a Note
app.put("/notes/:id", notesController.updateNote);

// ---------- Delete a Note
app.delete("/notes/:id", notesController.deleteNote);

//------------------------------------------------------------------------------------------> End CRUD Routes for notes

// -------------------------------------------------------------------------> User CRUD Routes

// ---------- Get all Users
app.get("/user", userController.fetchAllUsers);

// ---------- Get a specific User by ID
app.get("/user/:id", userController.fetchUser);

// ---------- Create a User
app.post("/user", userController.createUser);

// ---------- Update a User
app.put("/user/:id", userController.updateUser);

// ---------- Delete a User
app.delete("/user/:id", userController.deleteUser);

//------------------------------------------------------------------------------------------> End CRUD Routes for users

// -------------------------------------------------------------------------> Data CRUD Routes

// ---------- Get all Data
app.get("/data", dataController.fetchAllData);

// ---------- Get a specific Data by ID
app.get("/data/:id", dataController.fetchData);

// ---------- Create a Data
app.post("/data", dataController.createData);

// ---------- Update a Data
app.put("/data/:id", dataController.updateData);

// ---------- Delete a Data
app.delete("/data/:id", dataController.deleteData);

//------------------------------------------------------------------------------------------> End CRUD Routes for data

// -------------------------------------------------------------------------> Blog CRUD Routes

// ---------- Get all Blogs
app.get("/blog", blogController.fetchAllBlogs);

// ---------- Get a specific Blog by ID
app.get("/blog/:id", blogController.fetchBlog);

// ---------- Create a Blog
app.post("/blog", blogController.createBlog);

// ---------- Update a Blog
app.put("/blog/:id", blogController.updateBlog);

// ---------- Delete a Blog
app.delete("/blog/:id", blogController.deleteBlog);

//------------------------------------------------------------------------------------------> End CRUD Routes for blog

// Start the server
app.listen(PORT, () => {
  console.log(`Express Server Listening on port number: ${PORT}`);
});
