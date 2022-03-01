import axios from 'axios';
import React, { useState } from 'react';

import './FormSignup.css';

import { useCallback } from 'react';

import { Link, withRouter } from 'react-router-dom';

function FormSignup() {
  return (
    <div className="form-container">
      <h1>Sign up</h1>
      <form className="form">
        <div className="">
          {/* <div className="">
            <br />
            <div>{error}</div>
            <input
              type="text"
              placeholder="Username"
              
            />
          </div> */}
          <div className="">
            <br />
            <input
              type="email"
              placeholder="Email"
              className="form-input"

              /*  onChange={(e) => {
                setEmail(e.target.value);
              }} */
            />
          </div>
          <div className="">
            <br />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              /*  onChange={(e) => {
                setPword(e.target.value);
              }} */
            />
          </div>
          <div className="">
            <br />
            <input
              type="password"
              placeholder=" Confirm password"
              className="form-input"
              /*  onChange={(e) => {
                setPword(e.target.value);
              }} */
            />
          </div>
          <div className="btnSignup">
            <br />
            <button className="form-input-btn" type="submit">
              Sign up
            </button>
          </div>
          <div className="link">
            <br />
            <p className="form-link">
              Already signed up? <Link to={'/login'}>Login </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormSignup;
