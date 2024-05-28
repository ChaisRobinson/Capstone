import React, { useState, useEffect } from "react";

const Api = () => {
  const [catImage, setCatImage] = useState(null);
  const [favoritedImages, setFavoritedImages] = useState([]);

  const fetchCatImage = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
        {
          headers: {
            "x-api-key":
              "live_0Sx4YfmZdDyicWB3vPb0gxh59CrULtyvhEGdMN9fnaqXP03FU5nbcj5wxNWPgGCp",
          },
        }
      );
      const data = await response.json();
      setCatImage(data[0]);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  const handleFavorite = () => {
    if (catImage) {
      setFavoritedImages([...favoritedImages, catImage]);
    }
  };

  return (
    <div className="api-page">
      <div className="api-header">
        <h1>Random Cat Pictures</h1>
      </div>
      <div className="api-body">
        <div className="api-image-container">
          {catImage && (
            <div>
              <h2>Cat Image</h2>
              <img src={catImage.url} alt="Cat" className="cat-image" />
              <button onClick={handleFavorite}>Favorite</button>
            </div>
          )}
          <div className="favorites">
            <h2>Favorited Images</h2>
            {favoritedImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt="Favorite"
                className="favorite-image"
              />
            ))}
          </div>
        </div>
        <br></br><br></br><br></br>
        <p>Click the button below to get a new cat picture.</p>
      </div>
      <br></br>
      <button className="refresh" onClick={fetchCatImage}>
        Refresh Image
      </button>
    </div>
  );
};

export default Api;