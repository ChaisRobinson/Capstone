import React from 'react';

const Api = () => {

  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_0Sx4YfmZdDyicWB3vPb0gxh59CrULtyvhEGdMN9fnaqXP03FU5nbcj5wxNWPgGCp"
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  
  fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));        





  return (
    
    <div className="api-page">
      <h1>API Information</h1>
      <p>
        This page provides will have a dopdown menu with cats and their images. from the CAT API.
      </p>


      
    </div>
  );
};

export default Api;
