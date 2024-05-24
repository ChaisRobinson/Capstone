import React from 'react';

const Menu = () => {
  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-items">
        <div className="menu-item">
          <h2>Catpuccino</h2>
          <p>A delicious blend of espresso and steamed milk, topped with foam shaped like a cat's face.</p>
          <p>Price: $4.99</p>
        </div>
        <div className="menu-item">
          <h2>Purrfect Latte</h2>
          <p>Smooth espresso mixed with creamy milk, finished with a drizzle of caramel.</p>
          <p>Price: $5.49</p>
        </div>
        <div className="menu-item">
          <h2>Meowcha</h2>
          <p>A Japanese-inspired green tea latte, with a hint of sweetness and a creamy texture.</p>
          <p>Price: $4.99</p>
        </div>
        {/* Add more menu items as needed */}
      </div>
    </div>
  );
};

export default Menu;
