import React, { useState, Component, useContext } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
//import { useAuth } from './auth';
import useAuth from '../hooks/useAuth';

//import { AuthProvider } from './components/auth';

const Navbar = ({ cartItems }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  // const  = useAuth();

  return (
    <>
      <header>
        <nav className="header-inner">
          <Link to="/" className="brand" onClick={closeMobileMenu}>
            EVENTS
          </Link>
          <div className="header-outer">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className="all-icons">
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/couponDeals"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Coupons
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="cart-svg">
          <span className="cart-length">
            {cartItems.length === 0 ? '' : cartItems.length}
          </span>
          <Link to="/basket">
            <i className="fas fa-shopping-cart" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
