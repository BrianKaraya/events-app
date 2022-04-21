import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from 'react-router-dom';

import CouponDeals from './pages/CouponDeals';

import Logout from './pages/Logout';
import ProtectedRoute from './ProtectedRoute';
//import useAuth from '../components/useAuth';
import Product from './Product';
import { ServicesPage } from './ServicesPage';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
import ShoppingCartItems from './ShoppingCartItems';

import Profile from './pages/Profile';
//import { AuthProvider } from './auth';
import { AuthProvider } from '../context/AuthProvider';
import { useAuth } from '../hooks/useAuth';

const Routers = ({
  eventProducts,
  cartItems,
  handleAddEvent,
  handleRemoveEvent,
  handleCartClearance,
}) => {
  //const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <AuthProvider>
        <div>
          {/* <Switch>
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

        <Route path="/basket">
          <ShoppingCartItems
            cartItems={cartItems}
            handleAddEvent={handleAddEvent}
            handleRemoveEvent={handleRemoveEvent}
            handleCartClearance={handleCartClearance}
          />
        </Route>

        <Route path="/logout" component={Logout} />
        <Route path="/admin" component={Admin} />

        <Route path="/profile" component={Profile} />

        
        <ProtectedRoute path="/couponDeals" component={CouponDeals} />
      </Switch> */}

          <Routes>
            <Route
              path="/"
              element={
                <Product
                  eventProducts={eventProducts}
                  handleAddEvent={handleAddEvent}
                  handleRemoveEvent={handleRemoveEvent}
                />
              }
            />

            <Route path="/services" element={<ServicesPage />} />

            <Route path="/login" element={<FormLogin />} />

            <Route path="/signup" element={<FormSignup />} />
            <Route path="/profile" element={<Profile />} />

            <Route
              path="/basket"
              element={
                <ShoppingCartItems
                  cartItems={cartItems}
                  handleAddEvent={handleAddEvent}
                  handleRemoveEvent={handleRemoveEvent}
                  handleCartClearance={handleCartClearance}
                />
              }
            />

            <Route path="/logout" element={<Logout />} />
            {/* <Route path="/couponDeals" element={<CouponDeals />} /> */}

            <Route
              path="/couponDeals"
              element={
                <ProtectedRoute>
                  <CouponDeals />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
};

export default Routers;
