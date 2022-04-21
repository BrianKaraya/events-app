import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import data from './data';

import Routers from './components/Routes';
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';
import { AuthProvider } from './context/AuthProvider';
//import { AuthProvider } from './components/auth';
import useAuth from './hooks/useAuth';
import Footer from './components/Footer';
import { Maps } from './components/Maps';

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

  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar cartItems={cartItems} />
          <Slider slides={SliderData} />

          <Routers
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
