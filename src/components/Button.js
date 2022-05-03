import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    // <Link to="sign-up">
    <button className="btn">{props.name}</button>
    // </Link>
  );
};
export default Button;
