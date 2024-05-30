// ------------------------------------------[Imports]-----------------------------------------------------------
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Index from "../components/Index";
import "./Blog.css";

function Blog() { 
  const [notes, setNotes] = useState([]); // State to store the blogs as an empty array
  const [createForm, setCreateForm] = useState({ title: "", body: "" }); // State to store the form data as an empty object for title and body
  const [updateForm, setUpdateForm] = useState({ // State to store the update form data as an empty object for _id, title, and body
    _id: null, // Set the state of updateForm to an empty _id
    title: "", // Set the state of updateForm to an empty title
    body: "", // Set the state of updateForm to an empty body
  }); 
  

  // ------------------------------------------[CRUD Operations]-------------------------------------------

  // ------------------------------------------[Create]------------------------------------------------------
  const createNote = async (e) => { // createNote is an asynchronous function that handles the creation of a new note that takes an event e as a parameter
    e.preventDefault(); // Prevents the default form submission behavior to allow manual control over the request
    const response = await axios({ // Asynchronously sends a POST request to the "/notes" API endpoint using the axios library
      method: "POST", // HTTP method POST for creating a new note
      url: "/notes", // API endpoint for creating a new note
      data: createForm, // Data to be sent in the request body (using the createForm state object)
    });
    setNotes([...notes, response.data.note]); // Add the new note to the state using the spread operator to copy all the properties of the notes array and then add the new note to the end of the array
    setCreateForm({ title: "", body: "" }); // Reset the form using the setCreateForm function to set the state of createForm to an empty title and body
  };
 

  const updateCreateFormField = (e) => { // updateCreateFormField is a function that updates the createForm state object with the values of the form fields that takes an event e as a parameter
    const { value, name } = e.target; // Extract the value and name properties from e.target
    setCreateForm(() => ({ // Use the setCreateForm function to update the state
      ...createForm, // Copy all the properties of createForm object to the new object uisng the spread operator
      [name]: value, // Update the specific property with the new value using the name property
    }));
  }; // Update the form data

  

  // ------------------------------------------[Read]--------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => { //fetchData is an asynchronous function that fetches data from an API endpoint ("/notes") and waits for the response 
      const response = await axios({ // Asynchronously sends a GET request to the "/notes" API endpoint using the axios library
        method: "GET", // HTTP method GET for fetching data
        url: "/notes", // API endpoint for fetching data 
      });
      const info = await response.data; // Extract the data from the response and store it in the info variable using which will wait for the response
      console.log(info); // Log the data to the console
      setNotes(info.notes); // Update the state of the notes variable using the setNotes function
    }; // Fetch the data

    fetchData(); // Call the fetchData function to fetch data when the component mounts
  }, []);
  console.log(notes); // Log the current value of the notes state variable to the console
  

  // ------------------------------------------[Update]------------------------------------------------------
  const handleUpdateFieldChange = (e) => { // handleUpdateFieldChange is a function that updates the updateForm state object with the values of the form fields that takes an event e as a parameter
    const { value, name } = e.target; // Extract the value and name properties from e.target 
    setUpdateForm(() => ({  // Use the setUpdateForm function to update the state 
      ...updateForm, // Copy all the properties of updateForm object to the new object uisng the spread operator
      [name]: value, // Update the specific property with the new value using the name property
    }));
  }; // Update the form data
 
  const updateNote = async (e) => { // updateNote is an asynchronous function that updates a blog on the backend using the PUT method that takes an event object as a parameter
    e.preventDefault(); // Prevents the default behavior of the event
    const response = await axios({ // Asynchronously sends a PUT request to the /notes/{updateForm._id} endpoint of the backend API with the updateForm data as the request payload
      method: "PUT", // HTTP method PUT for updating a blog
      url: `/notes/${updateForm._id}`, // API endpoint for updating a blog
      data: updateForm, // Data to be sent in the request body (using the updateForm state object)
    });
    const newNotes = notes.map((note) => { // a map function that creates a new array newNotes where each note is either the updated note from the API response or the original note
      if (note._id === response.data.note._id) { // if the note._id is equal to the response.data.note._id
        return response.data.note; // return the response.data.note
      } else { // if the note._id is not equal to the response.data.note._id
        return note; // return the original note
      }
    }); // Update the state
    setNotes(newNotes); // Update the state of the notes variable using the setNotes function
    setUpdateForm({ _id: null, title: "", body: "" }); // Reset the update form using the setUpdateForm function to set the state of updateForm to an empty _id, title, and body
  };

  

  const toggleUpdate = (note) => { // toggleUpdate is a function that toggles the update form by setting the state of updateForm to a new object with the note's _id, title, and body properties
    setUpdateForm({ _id: note._id, title: note.title, body: note.body }); // Set the state of updateForm to a new object with the note's _id, title, and body properties
  }; 
  
  // ------------------------------------------[Delete]------------------------------------------------------

  const deleteNote = async (noteToDelete) => { // deleteNote is an asynchronous function that deletes a blog from the backend using the DELETE method that takes a noteToDelete object as a parameter
    await axios.delete(`/notes/${noteToDelete._id}`); // Make a DELETE request to the /notes/{noteToDelete._id} endpoint of the backend API with the noteToDelete data as the request payload
    const updatedNotes = notes.filter((note) => note._id !== noteToDelete._id); // Filter the notes array to remove the note that was just deleted
    setNotes(updatedNotes); // Update the state of the notes variable using the setNotes function
  }; // Delete a blog
  
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
            />{" "}
            {/* Create the form data */}
            <textarea
              name="body"
              value={createForm.body}
              placeholder="Body"
              onChange={updateCreateFormField}
            />{" "}
            {/* Create the form data */}
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
              />{" "}
              {/* Update the form data */}
              <textarea
                name="body"
                value={updateForm.body}
                placeholder="Body"
                onChange={handleUpdateFieldChange}
              />{" "}
              {/* Update the form data */}
              <button onClick={updateNote}>Update</button>
            </form>
          </div>
        </div>
        <Index data={notes} editNote={toggleUpdate} deleteNote={deleteNote} />{" "}
        {/* This JavaScript code snippet is rendering a component named Index with three props:
        data: This prop is being set to the notes array. This prop is likely used to pass data to the Index component for rendering.
        editNote: This prop is being set to the toggleUpdate function. 
        deleteNote: This prop is being set to the deleteNote function.  */}
        {/* Display the blogs */}
      </div>
    </div>
  );
}

export default Blog;
