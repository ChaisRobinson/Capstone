const Note = require("../models/note.js");

// ---------------> Controller Functions

const fetchAllNotes = async (req, res) => {
  // 1. Get all Notes from DB
  const notes = await Note.find({});
  // 2. Send all Notes back as a response
  res.json({ notes: notes });
};

const fetchNote = async (req, res) => {
  //1. Get id off the url
  const noteId = req.params.id;
  //2. Find the note associated with that id
  const note = await Note.findById(noteId);
  //3. Send that response with that note as the payload
  res.json({ note: note });
};

const createNote = async (req, res) => {
  // 1. Get data off request body
  console.log(`BODY: ${req.body}`);
  // 2. Create new Note
  //const title = req.body.title;
  //const body = req.body.body;
  const { title, body } = req.body;
  //3. Save Note
  const note = await Note.create({ title: title, body: body });
  //4. Send response
  res.json({ note: note });
};

const updateNote = async (req, res) => {
  // 1. Get id off the url
  const noteId = req.params.id;
  // 2. Get data off request body
  const { title, body } = req.body;
  // 3. Update the note associated with that id
  const updatedNote = await Note.findByIdAndUpdate(
    noteId,
    { title, body },
    { new: true }
  );
  // 4. Send response
  if (!updatedNote) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.json({ note: updatedNote });
};

const deleteNote = async (req, res) => {
  // 1. Get id off the url
  const noteId = req.params.id;
  //2. Delete the note associated with that id
  const deletedNote = await Note.findByIdAndDelete(noteId);
  //3. Send response
  if (!deletedNote) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.json({ success: "Record has been deleted successfully" });
};

module.exports = {
  fetchAllNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
};