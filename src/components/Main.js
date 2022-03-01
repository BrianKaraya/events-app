import React, { Component, useState } from 'react';
import data from '../data';
import Product from './Product';

export default function Main(props) {
  const { eventProducts } = props;

  return (
    <main>
      <h2>Upcoming events..</h2>
      <div>
        {eventProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
