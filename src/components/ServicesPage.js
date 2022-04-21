import React from 'react';

import './ServicesPage.css';
import ServicesPageItems from './ServicesPageItems';

export const ServicesPage = () => {
  return (
    <>
      <div className="s-cards">
        <h1>Services</h1>
        <div className="s-cards__container">
          <div className="s-cards__wrapper">
            <div className="s-cards__items">
              <ServicesPageItems
                src="images/bkg2.jpg"
                text="Catering - 
              Hook you up with the best catering services and food-tents in town for your events. "
              />
              <ServicesPageItems
                src="images/advert.jpg"
                text="Advertisement -
              Advertise your business/event on our website or in events and festivals."
              />
              <ServicesPageItems
                src="images/maldives1.jpg"
                text="Reservations - 
              Hotel/Camping reservations for upcoming events. We've got you covered."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
