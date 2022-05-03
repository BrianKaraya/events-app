import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import PostLists from '../PostLists';
import useAuth from '../../hooks/useAuth';
import BtnAddToCart from '../BtnAddToCart';

const Profile = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const handleSignOut = () => {
    <Navigate to="/logout" state={{ from: location }} replace />;
  };
  return (
    <div className="posts">
      <h1>Welcome {auth.username}!</h1>
      <h3>Your profile</h3>

      <h2>Info</h2>
      <hr />
      <h2>Role: {auth.roles}</h2>
      <h2>Email: {auth.email}</h2>
      <p>
        <a href="/">Go back home</a>
      </p>
      <BtnAddToCart name="Sign out" />
    </div>
  );
};
export default Profile;
