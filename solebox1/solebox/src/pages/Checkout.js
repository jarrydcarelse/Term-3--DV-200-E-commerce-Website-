import React, { useState } from 'react';

const Checkout = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  // Destructure formData for easier access
  const { firstName, lastName, email, address, city, zipCode } = formData;

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Sample cart data (replace with your actual cart data)
  const cartItems = [
    {
      id: 1,
      name: 'Jordan 1 Low Travis Scott',
      price: 1000.00,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Yeezy Slide',
      price: 225.00,
      quantity: 1,
    },
    // Add more items as needed
  ];

  // Function to calculate the total cart price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
  
    // Show an alert when the "Place Order" button is clicked
    window.alert('Order being processed...');
  
    // Add your checkout logic here (e.g., process payment, send order to the server)
    // For this example, we'll simply log the input values and cart data
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('ZIP Code:', zipCode);
    console.log('Cart Items:', cartItems);
    console.log('Total Price:', calculateTotal());
  
    // Reset the form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
    });
  };
  

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* User Information Form */}
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>ZIP Code</label>
          <input
            type="text"
            name="zipCode"
            value={zipCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>

      {/* Cart Summary */}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Price: ${calculateTotal().toFixed(2)}</p>
      </div> <br></br><br></br>
    </div>
    
  );
};

export default Checkout;

