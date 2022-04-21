import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import PostLists from '../PostLists';

//import { useAuth } from '../hooks/useAuth';
import { useAuth } from '../auth';
import { AuthProvider } from '../auth';

const CouponDeals = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="coupons">
      <div>
        <h2>Welcome</h2>
      </div>

      <PostLists />
    </div>
  );
};

export default CouponDeals;
