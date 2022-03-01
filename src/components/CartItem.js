import React from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
//import "./CartItem.css";
import CartContext from '../context/cart/CartContext';
import formatCurrency from 'format-currency';

/* const CartItem = (props) => {
  return (
    <div className="cartitem">
      <div className="cartitem-image">
        <img src="./images/rsz_kids.jpg" />
      </div>
      <Link to={`/CardItem/${111}`} className="cartitem-name">
        <p>Product1</p>
      </Link>
      <p className="cartitem-price">$10.00</p>
      <select className="cartitem-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartitem-deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
 */
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: '%s%v', symbol: '€' };
  return (
    <li className="CartItem__item">
      <img src={item.image} alt="" />
      <div>
        {item.name} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className="CartItem__button" onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
  );
};
export default CartItem;
