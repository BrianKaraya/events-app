import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnAddToCart from './BtnAddToCart';

function CardItem(props) {
  return (
    <div className="products">
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            {
              <img
                className="cards__item__img"
                alt="Travel Image"
                src={props.src}
                id={props.id}
              />
            }
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <br />

            <h5 className="cards__item__date">Date: {props.when}</h5>
            <h5 className="cards__item__price">Price(Euro): {props.price}</h5>

            <BtnAddToCart />
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
