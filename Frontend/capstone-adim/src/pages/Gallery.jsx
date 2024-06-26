// ------------------------------------------[Imports]-----------------------------------------------------------
import React from "react";
import  { useState } from "react";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import catinfo from "../Models/catinfo.js";


const Gallery = () =>{
  const [count, setCount] = useState(0); // initialize count to 0
  const [currentCharacter, setCurrentCharacter] = useState(catinfo[count]); // initialize currentCharacter to catinfo[count]

  const changePic = () => {
    setCount((prevCount) => {
      const newCount = (prevCount + 1) % catinfo.length;
      setCurrentCharacter(catinfo[newCount]);
      return newCount;
    });
  };  // function to change the current picture forward

  const prevPic = () => {
    setCount((prevCount) => {
      const newCount = (prevCount - 1 + catinfo.length) % catinfo.length;
      setCurrentCharacter(catinfo[newCount]);
      return newCount;
    });
  };  // function to change the current picture backward 

  return (
    <div className="card-container">
      <h1 className="card-header">Cats To Play with</h1>
      <Card data={currentCharacter} className="card" /> {/* Card  to dispaly the current picture*/}
      <div>
        <Button onClick={prevPic} label="Previous" /> {/* Buttons to navigate to the previous and next picture*/}
        <Button onClick={changePic} label="Next" />
      </div>
      <div className="footer-two">
        <br />Made with ❤️ by Chais
      </div>
    </div>
  );
};

export default Gallery;
