import React, { Component } from 'react';
import './Cards.css';
import CardItem from './CardItem';

import data from '../data';
import { Maps } from './Maps';
import CheckoutCart from './CheckoutCart';

export class Cards extends Component {
  render() {
    return (
      <div className="cards">
        <h1>Check out our upcoming events!</h1>

        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                id="111"
                src="./images/rsz_kids.jpg"
                text="Groningen: Enjoy a family day out with delicious food, fun activities and events."
                label="Family"
                when="20/5/22"
                price="15"

                //path="/Product1"
              />
              <CardItem
                id="112"
                src="images/events3.jpg"
                text="Rotterdam: Party till you drop with DJ C. Half price for drinks before midnight."
                label="Night Out"
                when="22/6/22"
                price="20"
                //path="/Product2"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                id="113"
                src="images/upcomingevent4.jpg"
                text="Heerlen: Afro-carribean live cultural event with live band. Free entry. "
                label="Culture"
                when="02/3/22"
                price="0"
                //path="/Product3"
              />
              <CardItem
                id="114"
                src="images/events4.jpg"
                text="Maastrict: Show your moves. Friday afternoon dance event with happy hour."
                label="Dance"
                when="16/4/22"
                price="5"
                //path="/Product4"
              />
              <CardItem
                id="115"
                src="images/rsz_zumba.jpg"
                text="Delft: Upcoming fun zumba event every weekend. Break the sweat."
                label="Fitness"
                when="07/5/22"
                price="12"
                // path="/Product5"
              />
            </ul>
          </div>
        </div>
        <div className="mapss">
          <h2>Event Locations</h2>
          <Maps />
        </div>
      </div>
    );
  }
}
