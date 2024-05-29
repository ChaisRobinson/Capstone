//------> Dependencies
const Blog = require("../models/blog.js");

// ---------------> Controller Functions

// Fetch all Blog entries
const fetchAllBlogs = async (req, res) => {
  try {
    // 1. Get all Blog entries from the DB
    const blog = await Blog.find({});
    // 2. Send all Blog entries back as a response
    res.json({ Blog: blog });
    //res.json({ Title: title });
  } catch (error) {
    // Error handling message
    res.status(500).json({ error: error.message });
  }
};

// Fetch a single Blog entry by ID
const fetchBlog = async (req, res) => {
  try {
    // 1. Get id off the URL
    const blogId = req.params.id;
    // 2. Find the Blog entry associated with that id
    const blog = await Blog.findById(blogId);
    // 3. Send the response with that Blog entry as the payload
    res.json({ blog: blog });
  } catch (error) {
    // Error handling
    res.status(500).json({ error: error.message });
  }
};

// Create a new Blog entry
const createBlog = async (req, res) => {
  try {
    // 1. Get data off request body
    //const { Title, Blog } = req.body;
    
    // 2. Create new Blog entry
    //const blog = await Blog.create({ Title, Blog });
    const blog = await Blog.create(req.body);
    // 3. Send response
    res.json({ blog: blog });
  } catch (error) {
    // Error handling
    res.status(500).json({ error: error.message });
  }
};

// Update an existing Blog entry
const updateBlog = async (req, res) => {
  try {
    // 1. Get id off the URL
    const blogId = req.params.id;
    // 2. Get data off request body
    const { Title, Blog } = req.body;
    // 3. Find the Blog entry associated with that id and update it
    await Blog.findByIdAndUpdate(blogId, { Title, Blog });
    // 4. Fetch the updated Blog entry
    const updatedBlog = await Blog.findById(blogId);
    // 5. Send response
    res.json({ blog: updatedBlog });
  } catch (error) {
    // Error handling
    res.status(500).json({ error: error.message });
  }
};

// Delete a Blog entry
const deleteBlog = async (req, res) => {
  try {
    // 1. Get id off the URL
    const blogId = req.params.id;
    // 2. Delete the Blog entry associated with that id
    await Blog.findByIdAndDelete(blogId);
    // 3. Send response
    res.json({ success: "Record has been deleted successfully" });
  } catch (error) {
    // Error handling
    res.status(500).json({ error: error.message });
  }
};

// Export the controller functions
module.exports = {
  fetchAllBlogs,
  fetchBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
