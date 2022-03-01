import React from 'react';
// import { Link } from 'react-router-dom'

export default function ServicesPageItems(props) {
  return (
    <>
      <div className="s-cards__item">
        <div className="s-cards__items__link">
          <div className="s-cards__item__pic-wrap">
            {
              <img
                className="s-cards__item__img"
                alt="Our services"
                src={props.src}
              />
            }
          </div>
          <div className="s-cards__item__info">
            <h5 className="s-cards__item__text">{props.text}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
