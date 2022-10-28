import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="/*" element={ <NotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
