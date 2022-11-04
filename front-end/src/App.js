import './styles/global.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import Orders from './pages/Orders';
import OrdersDetails from './pages/OrdersDetails';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/customer/products" element={ <CustomerProducts /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="customer/orders" element={ <Orders /> } />
          <Route exact path="customer/checkout" element={ <Checkout /> } />
          <Route exact path="customer/orders/:id" element={ <OrdersDetails /> } />
          <Route exact path="seller/orders" element={ <Orders /> } />
          <Route exact path="seller/orders/:id" element={ <OrdersDetails /> } />
          <Route exact path="/*" element={ <NotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
