import React from 'react';

import './FormLogin.css';
import { useLocation, useNavigate } from 'react-router-dom';

import { useRef, useState, useEffect, useContext } from 'react';

import axios from 'axios';

//import { useAuth } from './auth';
import useAuth from '../hooks/useAuth';
import AccessButton from './AccessButton';

const LOGIN_URL =
  'https://frontend-educational-backend.herokuapp.com/api/auth/signin';

const FormLogin = () => {
  //const setAuth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUserName] = useState('');

  const [auth, setAuth] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          //withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, email, password, roles, accessToken });

      setUserName('');
      setEmail('');
      setPassword('');
      setSuccess(true);

      // navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="login-container">
          <h1>Welcome {auth.username}!</h1>
          <h2>Info</h2>
          <h2>Role: {auth.roles}</h2>
          <h2>Email: {auth.email}</h2>

          <br />
          <div className="li">
            <a href="/">Home</a>
            <br />

            <a href="/profile">Profile</a>
            {/* <button>Logout</button> */}
          </div>
        </section>
      ) : (
        <section>
          <div className="login-container">
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit} className="login-form">
              <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              {/* <button>Sign In</button> */}
              <AccessButton name="Sign in" />
              <p>
                Need an Account?{' '}
                <span className="">
                  <a href="/signup" className="form-link">
                    Sign Up
                  </a>
                </span>
              </p>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default FormLogin;

{
  /* <>
      {success ? (
        <section className="login-container">
          <h1>
            Welcome
             {setAuth.username}! 
          </h1>

          <br />
          <div className="li">
            <a href="/">Home</a>

            <a href="/profile">Profile</a>
             <button>Logout</button> 
          </div>
        </section>
      ) : ( */
}
//const auth = useAuth(useContext);
/*   auth({ username, password, roles, accessToken }) */
