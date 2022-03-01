import React, { Component, useState } from 'react';
//import data from './data';
import './ShoppingCartItems.css';

export default function ShoppingCartItems({
  cartItems,
  handleAddEvent,
  handleRemoveEvent,
  handleCartClearance,
}) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-items">
      <h2>Shopping cart</h2>
      <div className="cart-items-header">
        <div className="clear-cart">
          {cartItems.length >= 1 && (
            <button className="clear-cart-btn" onClick={handleCartClearance}>
              Clear cart
            </button>
          )}
        </div>
        {cartItems.length === 0 && (
          <div className="cart-items-empty">Cart is empty</div>
        )}
      </div>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-items-list">
          <img className="cart-items-image" src={item.image} alt={item.name} />

          <div className="carts-items-name">{item.event}</div>
          <div className="carts-items-function">
            <div className="buttons">
              <button
                className="cart-items-add"
                onClick={() => handleAddEvent(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveEvent(item)}
              >
                -
              </button>
            </div>

            <div className="cart-items-price">
              {item.quantity} * {item.price}
            </div>
          </div>
        </div>
      ))}

      <div className="total-price">
        Total amount:
        <div className="cart-items-total">{totalPrice} ($)</div>
      </div>
      <div className="btn-div">
        {cartItems.length > 0 && (
          <button className="btn-checkOut">Proceed to checkout</button>
        )}
      </div>
    </div>
  );
}
