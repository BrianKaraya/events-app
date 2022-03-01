import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Services from '../components/pages/Services';
import CouponDeals from '../components/pages/CouponDeals';
import Login from '../components/pages/Login';
import Signup from '../components/pages/Signup';
import Basket from '../components/pages/Basket';
import Logout from '../components/pages/Logout';
import ProtectedRoute from '../components/ProtectedRoute';
// import useAuth from '../components/useAuth';
import Product from './Product';
import { ServicesPage } from './ServicesPage';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
import ShoppingCartItems from './ShoppingCartItems';
import PostLists from './PostLists';

const Routes = ({
  eventProducts,
  cartItems,
  handleAddEvent,
  handleRemoveEvent,
  handleCartClearance,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Product
            eventProducts={eventProducts}
            handleAddEvent={handleAddEvent}
            handleRemoveEvent={handleRemoveEvent}
          />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/login">
          <FormLogin />
        </Route>
        <Route path="/signup">
          <FormSignup />
        </Route>
        {/* <Route path="/product1" component={Product1} />
          <Route path="/product2" component={Product2} />
          <Route path="/product3" component={Product3} />
          <Route path="/product4" component={Product4} />
          <Route path="/product5" component={Product5} /> */}
        <Route path="/basket">
          <ShoppingCartItems
            cartItems={cartItems}
            handleAddEvent={handleAddEvent}
            handleRemoveEvent={handleRemoveEvent}
            handleCartClearance={handleCartClearance}
          />
        </Route>
        {/* <Route path="/profile" component={Profile} /> */}
        <Route path="/logout" component={Logout} />
        {/* <Route path="/couponDeals" component={CouponDeals} /> */}{' '}
        {/* <Route path="/couponDeals" component={CouponDeals} /> */}
        <ProtectedRoute path="/couponDeals">
          <CouponDeals />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/login">
          <FormLogin />
        </ProtectedRoute> */}
        {/* <ProtectedRoute path="/login" component={Login} auth={isAuth} /> */}
      </Switch>
    </div>
  );
};

export default Routes;
