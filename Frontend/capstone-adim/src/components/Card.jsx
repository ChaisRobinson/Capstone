import React from "react";

function Card({ data }) {
  if (!data) return null; 

  return (
    <div className="card">
      <img src={data.photo} alt={data.name} className="card-img"/> 
      <h2 className="name">{data.name}</h2> 
      <p className="about">{data.about}</p>
       
    </div>
  );
}

export default Card;
