// ------------------------------------------[Imports]-----------------------------------------------------------
import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const Api = () => {
  const [catImage, setCatImage] = useState(null); // state to store the cat image sets useState to null
  const [favoritedImages, setFavoritedImages] = useState([]); // state to store the favorited images sets useState to an empty array

  const fetchCatImage = async () => {
    // Async function to fetch the cat image
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", // URL to fetch the random cat image
        {
          headers: {
            "x-api-key": API_KEY, // set the API key in the headers
          },
        }
      );
      const data = await response.json(); // parse the response body as JSON
      setCatImage(data[0]); // set the cat image in the state to the first element of the data array
    } catch (error) {
      // catch any errors that occur during the fetch
      console.error("Error fetching cat image:", error); // log the error
    }
  };

  useEffect(() => {
    // useEffect hook to call the fetchCatImage function when the component mounts
    fetchCatImage(); // call the fetchCatImage function
  }, []); // empty dependency array to ensure the function is only called once

  const handleFavorite = () => {
    // function to add the cat image to the favorited images
    if (catImage) {
      // check if catImage is truthy (not null or undefined)
      setFavoritedImages([...favoritedImages, catImage]); // add the cat image to the favorited images by spreading the current favoritedImages and the new catImage
    }
  };

  return (
    // return the UI
    <div className="api-page">
      <div className="api-header">
        <h1>Random Cat Pictures</h1>
      </div>
      <div className="api-body">
        <div className="api-image-container">
          {/*Conditional rendering. It checks if catImage is truthy (not null or undefined) */}
          {catImage && (
            <div>
              {/*If it is, it renders a div with a heading, an image, and a button. 
              The image source is set to catImage.url and the alt text is "Cat".  */}
              <h2>Cat Image</h2>
              <img src={catImage.url} alt="Cat" className="cat-image-2" />{" "}
              {/* display the cat image */}
              <button onClick={handleFavorite}>Favorite</button>{" "}
              {/* button to add the cat image to the favorited images */}
            </div>
          )}
          <div className="favorites">
            <h2>Favorited Images</h2>
            {/* map the favorited images with the index as the key and render an img element with the src from the image url and alt attributes */}
            {favoritedImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt="Favorite"
                className="favorite-image"
              />
            ))}
            {/* display the favorited images*/}
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <p>Click the button below to get a new cat picture.</p>
      </div>
      <br></br>
      <button className="refresh" onClick={fetchCatImage}>
        {" "}
        {/* button to fetch the cat image */}
        Refresh Image
      </button>
    </div>
  );
};

export default Api;
