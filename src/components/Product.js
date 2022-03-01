import { useContext } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnAddToCart from './BtnAddToCart';
import data from '../data';
import './Product.css';
import Main from './Main';
import formatCurrency from 'format-currency';
//import CartContext from '../context/cart/CartContext';
import { useCallback } from 'react';
import { Maps } from './Maps';
import Footer from './Footer';

export default function Product({ eventProducts, handleAddEvent }) {
  //const { addToCart } = useContext(CartContext);
  //const { item } = props;
  let opts = { format: '%s%v', symbol: '€' };

  return (
    <div className="container">
      <div className="title">
        <h2 className="event-title">Upcoming events</h2>
      </div>
      <div className="p-cards">
        <div className="products">
          {eventProducts.map((item) => (
            <div className="card">
              <img
                className="product-image"
                src={item.image}
                alt={item.event}
              />

              <div className="cards__item__info">
                <h4 className="product-name">{item.event}</h4>
                <div className="desc">{item.description} </div>
                <h5>Place: {item.where} </h5>
                <h5>Date: {item.when} </h5>
                <h5 className="product.price">
                  Price: {formatCurrency(`${item.price}`, opts)}{' '}
                </h5>
              </div>
              <div className="btn-div">
                <button
                  className="btn_add"
                  onClick={() => handleAddEvent(item)}
                >
                  Add to Cart
                </button>
                {/* onClick={() => addToCart(item)} */}
              </div>
            </div>
          ))}
        </div>
        <div className="mapss">
          {/* <h2>Event Locations</h2> */}
          <Maps />
        </div>

        <div className="footer-div">
          <Footer />
        </div>
      </div>
    </div>
  );
}