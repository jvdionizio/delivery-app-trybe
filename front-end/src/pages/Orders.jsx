import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrdersList from '../components/OrdersList';
import Header from '../components/Header';
import { verifyToken } from '../services/requests';

function Orders() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const currentUser = JSON.parse(localStorage.getItem('user') || {});
      const logged = await verifyToken(currentUser?.token);
      if (logged) {
        setUser(currentUser);
      } else {
        navigate('/login');
      }
    })();
  }, [navigate]);

  return (
    <div>
      { user ? (
        <div>
          <Header user={ user.name } />
          <OrdersList client="customer" userId={ user.id } />
        </div>
      ) : <p>Loading...</p> }
    </div>
  );
}

export default Orders;
