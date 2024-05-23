
//------> Dependencies
const mongoose = require("mongoose");
const { default: Blog } = require("../../../Frontend/capstone-adim/src/pages/Blog");

//------> Schema
const blogSchema = new mongoose.Schema({
  Title: String,
  Blog: String,
});

//------> Model
const Data = mongoose.model("Data", blogSchema);

//------> Exports
module.exports = Blog;
