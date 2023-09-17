import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import Home from './pages/Home'; // Import your Home component
import Products from './pages/Products'; // Import your Products component
import ProductDetail from './pages/ProductDetail'; // Import your ProductDetail component
import Cart from './pages/Cart'; // Import your Cart component
import Checkout from './pages/Checkout'; // Import your Checkout component
import Login from './pages/Login'; // Import your Login component
import UserProfile from './pages/UserProfile'; // Import your UserProfile component
import AdminDashboard from './pages/AdminDashboard'; // Import your AdminDashboard component



function App() {
  return (
    <div className="App">
    <AppHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/admin' element={<AdminDashboard />} />
      </Routes>
      {/* Add the rest of your content here */}
      <Footer />
    </div>
  );
  
}

export default App;


