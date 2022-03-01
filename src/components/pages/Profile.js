import React, { useState } from 'react';
import ProtectedRoute from '../ProtectedRoute';
// import useAuth from '../useAuth';
import PostLists from '../PostLists';
import CouponDeals from './CouponDeals';
import FormLogin from '../FormLogin';
import { Navigate, useLocation, withRouter } from 'react-router-dom';

function Profile(props) {
  return (
    <div className="posts">
      <PostLists />
    </div>
  );
}
export default Profile;
