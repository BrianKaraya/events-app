import useAuth from '../../hooks/useAuth';
import React, { useState } from 'react';
import Button from '../Button';

import AccessButton from '../AccessButton';

export default function Logout() {
  //const [isAuth, login, logout] = useAuth(true);
  return <AccessButton name="Reserve" />;
}
{
  /* {isAuth ? (
        <>
          <div className="ui message violet">You are logged out.</div>
        </>
      ) : (
        <>
          <div className="ui message brown">You are logged in..</div>

          <button className="ui button blue" onClick={logout}>
            Logout
          </button>
        </>
      )} */
}
