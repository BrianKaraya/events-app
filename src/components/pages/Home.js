import React, { useState } from 'react';
import '../../App.css';
import Slider from '../Slider';
import { SliderData } from '../../components/SliderData';

import { Cards } from '../Cards';
import Footer from '../Footer';
import { Maps } from '../Maps';
import CheckoutCart from '../CheckoutCart';

import data from '../../data';
import Product from '../Product';
import Main from '../Main';
import ShoppingCartItems from '../ShoppingCartItems';

export default function Home(props) {
  // const { eventProducts } = data;

  return (
    <>
      <div className="section">
        <Slider slides={SliderData} />
      </div>

      {/*  <main>
        <h2>Upcoming events..</h2>
        <div>
          {eventProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </main> */}

      {/* <Cards /> */}
      {/* <Product /> */}

      {/* <Main eventProducts={eventProducts} /> */}

      {/* <Footer /> */}
    </>
  );
}
