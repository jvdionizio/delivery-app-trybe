import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';
import OrdersDetails from './pages/OrdersDetails';
import OrdersBySeller from './pages/OrdersBySeller';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="customer/orders" element={ <Orders /> } />
          <Route exact path="customer/orders/:id" element={ <OrdersDetails /> } />
          <Route exact path="seller/orders" element={ <OrdersBySeller /> } />
          <Route exact path="seller/orders/:id" element={ <OrdersDetails /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
