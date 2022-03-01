import React from 'react';
import { useState } from 'react';
import ServicesPageItems from '../ServicesPageItems';
import ShoppingCartItems from '../ShoppingCartItems';

export default function Basket(props) {
  //const { item } = props;

  return (
    <div>
      <ShoppingCartItems />
    </div>
  );
}
