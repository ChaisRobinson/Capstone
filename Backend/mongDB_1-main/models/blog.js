//------> Dependencies
const mongoose = require("mongoose");

//------> Schema
const blogSchema = new mongoose.Schema({
  Title: String,
  Blog: String
});

//------> Model
const Blog = mongoose.model("Blog", blogSchema);

//------> Exports
module.exports = Blog;
