import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';
import OrdersDetails from './pages/OrdersDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="customer/checkout" element={ <Checkout /> } />
          <Route exact path="customer/orders" element={ <Orders /> } />
          <Route exact path="customer/orders/:id" element={ <OrdersDetails /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
