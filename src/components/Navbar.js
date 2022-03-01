import React, { useState, Component } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from './auth';
//import { Dropdown } from './Dropdown'
//import useAuth from './useAuth';

//import { useContext } from 'react';

function Navbar({ cartItems }) {
  // const { cartItems, showHideCart } = useContext(CartContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  //const [isAuth, login, logout] = useAuth(false);
  const auth = useAuth();
  return (
    <>
      <header>
        <nav className="header-inner">
          <Link to="/" className="brand" onClick={closeMobileMenu}>
            EVENTS
          </Link>
          <div className="header-outer">
            {/*  <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
            {/*  <Link to="/" className="brand" onClick={closeMobileMenu}>
              EVENTS
            </Link> */}
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
                    Fans
                  </Link>
                </li>
                <li className="nav-item">
                  {!auth.user && (
                    <Link
                      to="/login"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Login
                    </Link>
                  )}
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
}

export default Navbar;
