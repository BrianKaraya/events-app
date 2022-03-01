import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import CouponDeals from './components/pages/CouponDeals';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';
// import Checkout from './components/pages/Checkout';
import Basket from './components/pages/Basket';

import Profile from './components/pages/Profile';
import Logout from './components/pages/Logout';
import ProtectedRoute from './components/ProtectedRoute';

import Product from './components/Product';
import data from './data';
import Main from './components/Main';
import Footer from './components/Footer';
import Routes from './components/Routes';
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';
import { AuthProvider } from './components/auth';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const { eventProducts } = data;

  const handleAddEvent = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveEvent = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  const loggingIn = async () => {};
  const loggingOut = async () => {};

  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar cartItems={cartItems} />
          <Slider slides={SliderData} />

          <Routes
            eventProducts={eventProducts}
            cartItems={cartItems}
            handleAddEvent={handleAddEvent}
            handleRemoveEvent={handleRemoveEvent}
            handleCartClearance={handleCartClearance}
          />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
