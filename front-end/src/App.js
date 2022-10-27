import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Login /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
