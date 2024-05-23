// Models are a representation of our data
// Schema: we create a blueprint for the model (like a table) so we can export that format to our express sever

//------> Dependencies
const mongoose = require("mongoose");

//------> Schema
const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//------> Model
const Users = mongoose.model("Users", usersSchema);

//------> Exports
module.exports = Users;
