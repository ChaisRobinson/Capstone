import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    const itemPrice = parseFloat(item.price.replace('$', ''));
    setCart([...cart, item]);
    setTotal(total + itemPrice);
  };

  const removeFromCart = (index) => {
    const itemPrice = parseFloat(cart[index].price.replace('$', ''));
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setTotal(total - itemPrice);
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
      </div>
      <div className="menu-items">
        <div className="menu-item">
          <h2>Catpuccino</h2>
          <p>A delicious blend of espresso and steamed milk, topped with foam shaped like a cat's face.</p>
          <p>Price: $4.99</p>
          <button onClick={() => addToCart({ name: 'Catpuccino', price: '$4.99' })}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <h2>Purrfect Latte</h2>
          <p>Smooth espresso mixed with creamy milk, finished with a drizzle of caramel.</p>
          <p>Price: $5.49</p>
          <button onClick={() => addToCart({ name: 'Purrfect Latte', price: '$5.49' })}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <h2>Meowcha</h2>
          <p>A Japanese-inspired green tea latte, with a hint of sweetness and a creamy texture.</p>
          <p>Price: $4.99</p>
          <button onClick={() => addToCart({ name: 'Meowcha', price: '$4.99' })}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <h2>Whiskerino</h2>
          <p>A rich and velvety hot chocolate, topped with whipped cream and a dusting of cocoa.</p>
          <p>Price: $4.49</p>
          <button onClick={() => addToCart({ name: 'Whiskerino', price: '$4.49' })}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <h2>Feline Frappe</h2>
          <p>A cool and refreshing blended coffee drink, with hints of vanilla and chocolate.</p>
          <p>Price: $5.99</p>
          <button onClick={() => addToCart({ name: 'Feline Frappe', price: '$5.99' })}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <h2>Kitty Chai</h2>
          <p>A spiced chai latte, blending black tea with a mix of cinnamon, cardamom, and ginger.</p>
          <p>Price: $4.99</p>
          <button onClick={() => addToCart({ name: 'Kitty Chai', price: '$4.99' })}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <h2>Clawfee</h2>
          <p>A classic black coffee, brewed to perfection with a bold, rich flavor.</p>
          <p>Price: $2.99</p>
          <button onClick={() => addToCart({ name: 'Clawfee', price: '$2.99' })}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <h2>Tabby Tea</h2>
          <p>A soothing herbal tea blend, perfect for relaxation and unwinding.</p>
          <p>Price: $3.99</p>
          <button onClick={() => addToCart({ name: 'Tabby Tea', price: '$3.99' })}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <h2>Leopard Lemonade</h2>
          <p>A zesty and refreshing lemonade, with a hint of mint and a touch of honey.</p>
          <p>Price: $3.49</p>
          <button onClick={() => addToCart({ name: 'Leopard Lemonade', price: '$3.49' })}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <h2>Mewcaron</h2>
          <p>A light and airy macaron, available in a variety of flavors like vanilla, chocolate, and raspberry.</p>
          <p>Price: $1.99 each</p>
          <button onClick={() => addToCart({ name: 'Mewcaron', price: '$1.99' })}>Add to Cart</button>
        </div>
      </div>
      <div className="cart">
        <h2> <ShoppingCart /> </h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}{' '}
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;