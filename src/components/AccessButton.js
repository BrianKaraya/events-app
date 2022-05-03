import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import './AccessButton.css';
const data = {
  products: [
    {
      id: '1',
      title: 'Event1',
      event: 'Kids Outing',
      image: './images/rsz_kids.jpg',
      Description: 'sdfgcnjk',
      Restriction: 'None',
      Where: 'Groningen',
      When: '12-12-22',
      Price: '15.00',
      Available: 'Available',
    },
    {
      id: '2',
      title: 'Event2',
      Event: 'Dance Party',
      image: './images/events3.jpg',
      Description: 'nnn',
      Restriction: '18plus',
      Where: 'Rotterdam',
      When: '25-12-22',
      Price: '20.00',
      Available: 'Sold Out',
    },
    {
      id: '3',
      title: 'Event 3',
      Event: 'Bachata',
      image: 'images/upcomingevent4.jpg',
      Description: 'ghvjbbii',
      Restriction: 'None',
      Where: 'Heerlen',
      When: '22-11-22',
      Price: '0',
      Available: 'Available',
    },
    {
      id: '4',
      title: 'Event 4',
      Event: 'Show your moves',
      image: 'images/events4.jpg',
      Description: 'bbbbbbbbbbb',
      Restriction: 'None',
      Where: 'Hoensbroek',
      When: '23-10-22',
      Price: '5.00',
      Available: 'Available',
    },
    {
      id: '5',
      title: 'Event 5',
      Event: 'Zumba',
      image: 'images/rsz_zumba.jpg',
      Description: 'vhhhhhhhh',
      Restriction: 'None',
      Where: 'Delft',
      When: '23-01-22',
      Price: '12.00',
      Available: 'Available',
    },
  ],
};
//export default eventData;

const AccessButton = (props) => {
  /* const location = useLocation();
  const handleSignOut = () => {
    <Navigate to="/logout" state={{ from: location }} replace />;
  }; */
  return (
    <div>
      <button className="btn-add">{props.name}</button>
    </div>
  );
};

export default AccessButton;
