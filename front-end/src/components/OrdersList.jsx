import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';
import { requestApi } from '../services/requests';

function Orders() {
  const [orders, setOrders] = useState(undefined);

  useEffect(() => {
    (async () => {
      // const userId = localStorage.getItem('orders').userId;
      const userId = 3;
      requestApi(`/customer/orders/${userId}`)
        .then((response) => setOrders(response))
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <div>
      {
        orders ? orders.map((order) => (
          <Link
            key={ order.id }
            to={ `/customer/orders/${order.id}` }
            params={ order.id }
          >
            <OrderCard
              id={ order.id }
              saleDate={ order.saleDate }
              totalPrice={ order.totalPrice }
              status={ order.status }
              onClick={ () => console.log('clicou') }
            />
          </Link>
        )) : <p>Carregando...</p>
      }
    </div>
  );
}

export default Orders;
