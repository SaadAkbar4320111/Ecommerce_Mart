import './App.css';
import { useState } from 'react';

// Importing Components
import Nav from './Components/Nav.js';
import Hero from './Components/Hero.js';
import Footer from './Components/Footer.js';
import Categories from './Components/Main/Categories.js';
import Products from './Components/Main/Products.js';

import { Routes, Route } from 'react-router-dom';

import SignUp from './Components/SignUp.js';
import Login from './Components/Login.js';
import ForgotPassword from './Components/forgotPass.js';
import Cart from './Components/Cart.js';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find(item => item.id === product.id);

    if (existingItem) {
      return prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }  
    return [...prevItems, { ...product, quantity: 1 }];
  });
};
    const removeFromCart = (id) => {
  setCartItems((prevItems) =>
    prevItems.filter((item) => item.id !== id)
  );
};

  return (
    <div className="app">
      <Nav
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm} />
      <div className="content">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  setSearchTerm={setSearchTerm}
                />
                <Products
                  selectedCategory={selectedCategory}
                  searchTerm={searchTerm}
                   addToCart={addToCart}
                />
              </>
            }
          />
          {/* Other Pages */}
          <Route  path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
  path="/cart"
  element={
    <Cart
      cartItems={cartItems}
      removeFromCart={removeFromCart}
    />
  }
/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;