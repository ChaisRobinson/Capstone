import React from "react";
import  { useState } from "react";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import catinfo from "../Models/catinfo.js";


const Gallery = () =>{
  const [count, setCount] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState(catinfo[count]);

  const changePic = () => {
    setCount((prevCount) => {
      const newCount = (prevCount + 1) % catinfo.length;
      setCurrentCharacter(catinfo[newCount]);
      return newCount;
    });
  };

  const prevPic = () => {
    setCount((prevCount) => {
      const newCount = (prevCount - 1 + catinfo.length) % catinfo.length;
      setCurrentCharacter(catinfo[newCount]);
      return newCount;
    });
  };

  return (
    <div className="cardcontainer">
      <h1 className="card-header">Cats To Play with</h1>
      <Card data={currentCharacter} className="card" />
      <div>
        <Button onClick={prevPic} label="Previous" />
        <Button onClick={changePic} label="Next" />
      </div>
      <div className="footer2">
        <br />Made with ❤️ by Chais
      </div>
    </div>
  );
};

export default Gallery;
