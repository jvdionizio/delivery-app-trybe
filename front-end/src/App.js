import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="/customer/products" element={ <CustomerProducts /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
