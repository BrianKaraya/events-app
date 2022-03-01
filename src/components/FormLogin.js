import React, { Component } from 'react';
//import useAuth from './useAuth';
import './FormLogin.css';
import { Link } from 'react-router-dom';
import PostLists from './PostLists';
import CouponDeals from './pages/CouponDeals';
import { useState } from 'react';
import { useAuth } from './auth';
import { useHistory } from 'react-router-dom';

const FormLogin = () => {
  //const [isAuth, login, logout] = useAuth(false);
  const [user, setUser] = useState('');
  const auth = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    auth.llogin(user);
    history.push('/');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-form">
        <div className="form-input-group">
          <div className="username">
            <br />
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUser(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="password">
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setUser(e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <button className="form-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div>
            <div className="form-text">
              <p className="form-link">
                Not a member? <Link to={'/signup'}>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
