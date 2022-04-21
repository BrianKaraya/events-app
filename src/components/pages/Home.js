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
    </>
  );
}
