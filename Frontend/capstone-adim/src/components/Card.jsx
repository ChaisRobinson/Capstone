// ------------------------------------------[Imports]-----------------------------------------------------------
import React from "react";

function Card({ data }) {
  if (!data) return null;  // If data is null, return null

  return (
    <div className="card">
      <img src={data.photo} alt={data.name} className="card-img"/> {/* Card Image */}
      <h2 className="name">{data.name}</h2>   {/* Card Name */}
      <p className="about">{data.about}</p> {/* Card About */}
       
    </div>
  );
}

export default Card;
