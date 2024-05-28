import React from "react";

const Notes = ({ note, editNote, deleteNote }) => {
    return (
      <>
        <div className="a_note">
          <h1>{note.title}</h1>
          <p>{note.body}</p>
  
          <div className="btnContainer">
            <button className="edit" onClick={() => editNote(note)}>
              Edit
            </button>
            <button className="delete" onClick={() => deleteNote(note)}>
              Delete
            </button>
          </div>
        </div>
      </>
    );
  };

export default Notes;