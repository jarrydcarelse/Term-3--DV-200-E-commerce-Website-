import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <div className="app-header">
      
      
      <div className="top-navbar">
        <div className="container">
          <div className="top-navbar-content">
            <div className="logo">
            <img src="./Solebox.png" alt="logo" />
            </div>
            <div className="nav-links">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                 <li><Link to="/cart" className="cart-link">
                    <img src="./cart.png" alt="Cart" className="cart-icon" />
                    </Link></li>
                    <Link to="/login" className="login-link">
                    <img src="./login.png" alt="Login" className="login-icon" />
                  </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AppHeader;

