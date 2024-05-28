import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Index from "../components/Index";
import "./Blog.css";

function Blog() {
  const [notes, setNotes] = useState([]);
  const [createForm, setCreateForm] = useState({ title: "", body: "" });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

  // ------------------------------------------[CRUD Operations]-------------------------------------------

  // ------------------------------------------[Create]------------------------------------------------------
  const createNote = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: "/notes",
      data: createForm,
    });
    setNotes([...notes, response.data.note]);
    setCreateForm({ title: "", body: "" });
  };

  const updateCreateFormField = (e) => {
    const { value, name } = e.target;
    setCreateForm(() => ({
      ...createForm,
      [name]: value,
    }));
  };

  // ------------------------------------------[Read]--------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "GET",
        url: "/notes",
      });
      const info = await response.data;
      console.log(info);
      setNotes(info.notes);
    };

    fetchData();
  }, []);
  console.log(notes);
  // ------------------------------------------[Update]------------------------------------------------------
  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;
    setUpdateForm(() => ({
      ...updateForm,
      [name]: value,
    }));
  };

  const updateNote = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "PUT",
      url: `/notes/${updateForm._id}`,
      data: updateForm,
    });
    const newNotes = notes.map((note) => {
      if (note._id === response.data.note._id) {
        return response.data.note;
      } else {
        return note;
      }
    });
    setNotes(newNotes);
    setUpdateForm({ _id: null, title: "", body: "" });
  };

  const toggleUpdate = (note) => {
    setUpdateForm({ _id: note._id, title: note.title, body: note.body });
  };

  // ------------------------------------------[Delete]------------------------------------------------------

  const deleteNote = async (noteToDelete) => {
    await axios.delete(`/notes/${noteToDelete._id}`);
    const updatedNotes = notes.filter((note) => note._id !== noteToDelete._id);
    setNotes(updatedNotes);
  };

  return (
    <div className="Blog">
      <div className="formcontainer">
        <div className="formAdmin">
          <form>
            <h1>Add Blog</h1>
            <input
              name="title"
              value={createForm.title}
              placeholder="Title"
              onChange={updateCreateFormField}
            />
            <textarea
              name="body"
              value={createForm.body}
              placeholder="Body"
              onChange={updateCreateFormField}
            />
            <button onClick={createNote}>Submit</button>
          </form>
          <div className="formB">
            <form>
              <h1>Update Blog</h1>
              <input
                name="title"
                value={updateForm.title}
                placeholder="Title"
                onChange={handleUpdateFieldChange}
              />
              <textarea
                name="body"
                value={updateForm.body}
                placeholder="Body"
                onChange={handleUpdateFieldChange}
              />
              <button onClick={updateNote}>Update</button>
            </form>
          </div>
        </div>
        <Index data={notes} editNote={toggleUpdate} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default Blog;
