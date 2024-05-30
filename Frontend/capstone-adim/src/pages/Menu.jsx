// ------------------------------------------[Imports]-----------------------------------------------------------
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

const Menu = () => {
  const [cart, setCart] = useState([]); // Initialize cart state in an empty array using useState with an initial value of an empty array
  const [total, setTotal] = useState(0); // Initialize total state using useState with an initial value of 0

  const addToCart = (item) => {
    // Defines a function to addToCart that takes an item as a parameter
    const itemPrice = parseFloat(item.price.replace("$", "")); // Replace dollar sign with empty string and convert to number using parseFloat
    setCart([...cart, item]); // Add item to cart using spread operator to create a new array with the item added
    setTotal(total + itemPrice); // Update total by adding the price of the added item to the current total value
  };

  const removeFromCart = (index) => {
    // Defines a function to removeFromCart that takes an index as a parameter
    const itemPrice = parseFloat(cart[index].price.replace("$", "")); // Remove dollar sign  with empty string and convert to number using parseFloat
    const updatedCart = [...cart]; // Create a copy of the cart using spread operator to create a new array
    updatedCart.splice(index, 1); // Remove the item at the specified index using splice operator
    setCart(updatedCart); // Update the cart state using the new array
    setTotal(total - itemPrice); // Update total by subtracting the price of the removed item from the current total value
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
      </div>
      <div className="menu-items">
        <div className="menu-item">
          <h2>Catpuccino</h2>
          <p>
            A delicious blend of espresso and steamed milk, topped with foam
            shaped like a cat's face.
          </p>
          <p>Price: $4.99</p>
          <button
            onClick={() => addToCart({ name: "Catpuccino", price: "$4.99" })}
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
        <div className="menu-item">
          <h2>Purrfect Latte</h2>
          <p>
            Smooth espresso mixed with creamy milk, finished with a drizzle of
            caramel.
          </p>
          <p>Price: $5.49</p>
          <button
            onClick={() =>
              addToCart({ name: "Purrfect Latte", price: "$5.49" })
            }
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
        <div className="menu-item">
          <h2>Meowcha</h2>
          <p>
            A Japanese-inspired green tea latte, with a hint of sweetness and a
            creamy texture.
          </p>
          <p>Price: $4.99</p>
          <button
            onClick={() => addToCart({ name: "Meowcha", price: "$4.99" })}
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
        <div className="menu-item">
          <h2>Whiskerino</h2>
          <p>
            A rich and velvety hot chocolate, topped with whipped cream and a
            dusting of cocoa.
          </p>
          <p>Price: $4.49</p>
          <button
            onClick={() => addToCart({ name: "Whiskerino", price: "$4.49" })}
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
        <div className="menu-item">
          <h2>Feline Frappe</h2>
          <p>
            A cool and refreshing blended coffee drink, with hints of vanilla
            and chocolate.
          </p>
          <p>Price: $5.99</p>
          <button
            onClick={() => addToCart({ name: "Feline Frappe", price: "$5.99" })}
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
        <div className="menu-item">
          <h2>Kitty Chai</h2>
          <p>
            A spiced chai latte, blending black tea with a mix of cinnamon,
            cardamom, and ginger.
          </p>
          <p>Price: $4.99</p>
          <button
            onClick={() => addToCart({ name: "Kitty Chai", price: "$4.99" })}
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
        <div className="menu-item">
          <h2>Clawfee</h2>
          <p>
            A classic black coffee, brewed to perfection with a bold, rich
            flavor.
          </p>
          <p>Price: $2.99</p>
          <button
            onClick={() => addToCart({ name: "Clawfee", price: "$2.99" })}
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
        <div className="menu-item">
          <h2>Tabby Tea</h2>
          <p>
            A soothing herbal tea blend, perfect for relaxation and unwinding.
          </p>
          <p>Price: $3.99</p>
          <button
            onClick={() => addToCart({ name: "Tabby Tea", price: "$3.99" })}
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
        <div className="menu-item">
          <h2>Leopard Lemonade</h2>
          <p>
            A zesty and refreshing lemonade, with a hint of mint and a touch of
            honey.
          </p>
          <p>Price: $3.49</p>
          <button
            onClick={() =>
              addToCart({ name: "Leopard Lemonade", price: "$3.49" })
            }
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
        <div className="menu-item">
          <h2>Mewcaron</h2>
          <p>
            A light and airy macaron, available in a variety of flavors like
            vanilla, chocolate, and raspberry.
          </p>
          <p>Price: $1.99 each</p>
          <button
            onClick={() => addToCart({ name: "Mewcaron", price: "$1.99" })}
          >
            Add to Cart
          </button>{" "}
          {/* Add to cart button */}
        </div>
      </div>
      <div className="cart">
        <h2>
          {" "}
          <ShoppingCart />{" "}
        </h2>
        {/* Display message if cart is empty else display cart items using conditional rendering */}
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <> {/* <> is used to wrap multiple elements without the need for a wrapping parent element */}
            <ul>
              {/*If cart is not empty, display list of cart items */}
              {/* Map cart items to list items  using the key as an index */}
              {cart.map((item, index) => (
                <li key={index}>
                  {" "} {/* Add space between list items  */}
                  {/* Use index as the key */}
                  {item.name} - {item.price} {/* Display item name and price */}
                  <button onClick={() => removeFromCart(index)}>
                    {" "}
                    {/* Remove from cart button */}
                    Remove
                  </button>{" "}
                </li>
              ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>{" "}
            {/* Display total amount in dollars with two decimal places using  the toFixed  method*/}
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
