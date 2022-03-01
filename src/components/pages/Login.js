import axios from 'axios';

import FormLogin from '../FormLogin';

import React, { useState } from 'react';
import ProtectedRoute from '../ProtectedRoute';
// import useAuth from '../useAuth';
import PostLists from '../PostLists';
import {
  Link,
  Navigate,
  Redirect,
  useLocation,
  withRouter,
} from 'react-router-dom';

function Login(props) {
  /* const location = useLocation();
  const [isAuth, login, logout] = useAuth(false);
  const handleLogin = () => {
    props.history.push('/couponDeals');
  }; */

  return (
    <div className="">
      <FormLogin />
    </div>
  );
}
export default Login;
