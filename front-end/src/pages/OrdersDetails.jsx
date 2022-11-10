import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import OrderDetailsList from '../components/OrderDetailsList';
import { verifyToken } from '../services/requests';
import Heading from '../components/styles/Heading';

function OrdersDetails() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const currentUser = JSON.parse(localStorage?.getItem('user')) || navigate('/login');
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
        <div
          className="
            bg-white-smoked
            h-screen
            w-screen
            mt-28
            mb-5
            flex
            flex-col
            items-center
          "
        >
          <Header client={ user.role } user={ user.name } />
          <OrderDetailsList client={ user.role } userId={ user.id } />
          <div className="mt-7">
            <Heading size="sm" asChild>
              <h1>Compra Realizada com Sucesso</h1>
            </Heading>
          </div>
        </div>
      ) : <p>Loading...</p> }
    </div>
  );
}

export default OrdersDetails;
