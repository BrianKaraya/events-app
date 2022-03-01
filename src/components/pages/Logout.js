/* //import PostLists from '../PostLists';
import useAuth from '../useAuth';
import React, { useState } from 'react';

export default function Logout() {
  const [isAuth, login, logout] = useAuth(true);
  return (
    <div>
      {isAuth ? (
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
      )}
    </div>
  );
}
 */
import React from 'react';
//import { FormSignup } from '../FormSignup';

export default function Logout() {}
