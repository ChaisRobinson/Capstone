// ------------------------------------------[Imports]-----------------------------------------------------------
import React from 'react'
import Notes from './Notes'

const Index = ({ data, editNote, deleteNote }) => {
  return (
    <>
    {/* Conditionally render the blogs if they exist and are not empty */}
      {data && data.length > 0 ? (
        data.map((note) => (
          <div className="note" key={note._id}> {/* Map the blogs to the Blogs component */}
            <Notes note={note} editNote={editNote} deleteNote={deleteNote} />
           {/* Pass the note, editNote, and deleteNote props to the Notes component */}
          </div>
        ))
      ) : (
        <p>No blogs found.</p> 
      )}{/* If no blogs are found, display a message */}
    </>
  )
}


export default Index



