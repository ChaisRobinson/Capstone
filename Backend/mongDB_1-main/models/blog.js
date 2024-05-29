//------> Dependencies
const mongoose = require("mongoose");

//------> Schema
const blogSchema = new mongoose.Schema({
  Title: String,
  Blog: String
});
//use lowercase for title and body FUTURE ENHANCEMENT
//------> Model
const Blog = mongoose.model("Blog", blogSchema);

//------> Exports
module.exports = Blog;
