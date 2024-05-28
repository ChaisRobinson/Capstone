// ------------------------------------------[Imports]-----------------------------------------------------------
import React from 'react'
import Notes from './Notes'

const Index = ({ data, editNote, deleteNote }) => {
  return (
    <>
      {data && data.length > 0 ? (
        data.map((note) => (
          <div className="note" key={note._id}>
            <Notes note={note} editNote={editNote} deleteNote={deleteNote} />
            {/* Map the blogs to the Blogs component */}
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </>
  )
}

export default Index