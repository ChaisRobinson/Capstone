import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="button">  {/* button to change the image */}
      {label}
    </button>
  );
};

export default Button;
