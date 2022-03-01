/* import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth) {
          return {
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            /> 
          };
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;




 */

import React from 'react';
import { useAuth } from './auth';
import { useHistory } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const history = useHistory();

  if (!auth.user) {
    history.push('/login');
  }
  return children;
};
export default ProtectedRoute;
