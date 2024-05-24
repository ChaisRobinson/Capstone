import React, { useState, useEffect } from "react";

const Api = () => {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
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

    fetchCatImage();
  }, []);
  return (
    <div className="api-page">
      <div className="api-header">
      <h1>Cat Pictures</h1>
      </div>
      <div className="api-body">
      <p>
        Refresh page to see a new kitty!
      </p>
      </div>
      <div className="cat-image-container">
      {catImage && <img  className="cat-image" src={catImage.url} alt="Cat" />}
      </div>
    </div>
  );
};

export default Api;
