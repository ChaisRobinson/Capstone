// ------------------------------------------[Imports]-----------------------------------------------------------
import React from "react";

function Card({ data }) { // Card is a functional component that takes in a data prop
  if (!data) return null;  // If data is null, return null

  return (
    <div className="card">
      <img src={data.photo} alt={data.name} className="card-img"/> {/* Card Image that takes in the data prop as the src and the name prop as the alt text */}
      <h2 className="name">{data.name}</h2>   {/* Card Name that takes in the data prop as the name prop */}
      <p className="about">{data.about}</p> {/* Card About  that takes in the data prop as the about prop */}
       
    </div>
  );
}

export default Card;
