// Cart.js

import React, { useState } from 'react';

const Cart = () => {
  // Sample cart data (replace with your actual cart data)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Jordan 1 Low Travis Scott',
      price: 1000.00,
      quantity: 1,
      image: 'https://images.stockx.com/images/Air-Jordan-1-Low-fragment-design-x-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1629307046&q=60', // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Yeezy Slide',
      price: 225,
      quantity: 1,
      image: 'https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1671115611&q=60', // Replace with actual image URLs
    },
    // Add more items as needed
  ]);

  // Function to calculate the total cart price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Function to update the quantity of an item
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Sneaker</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} width="100" height="100" />
              </td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        <p>Total Price: ${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;


