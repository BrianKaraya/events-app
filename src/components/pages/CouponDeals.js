import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth } from '../auth';
import PostLists from '../PostLists';
import { useHistory } from 'react-router-dom';

//import useAuth from '../useAuth';

function CouponDeals(props) {
  //const [isAuth, login, logout] = useAuth(false);
  const auth = useAuth();
  const history = useHistory();
  const handlellogout = () => {
    auth.llogout();
    history.push('/');
  };

  const style = {
    color: 'red',
    fontSize: 15,
    marginLeft: 200,
    marginBottom: 20,
    marginTop: 20,
  };

  return (
    <div className="">
      <div style={style}>
        <h2>Welcome {auth.user}</h2>
        <button className="" onClick={handlellogout}>
          Logout
        </button>
      </div>

      <PostLists />
    </div>
  );
}

export default CouponDeals;
