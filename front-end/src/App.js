import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';
import OrdersDetails from './pages/OrdersDetails';
import OrdersBySeller from './pages/OrdersBySeller';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="customer/orders" element={ <Orders /> } />
          <Route exact path="customer/orders/:id" element={ <OrdersDetails /> } />
          <Route exact path="seller/orders" element={ <OrdersBySeller /> } />
          <Route exact path="seller/orders/:id" element={ <OrdersDetails /> } />
          <Route exact path="/*" element={ <NotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
