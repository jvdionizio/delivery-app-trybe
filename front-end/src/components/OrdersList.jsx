import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';
import OrderCardSeller from './OrderCardSeller';
import { requestApi } from '../services/requests';

const NUMBER_TWO = 2;
const NUMBER_THREE = 3;

function OrdersList({ client }) {
  const [orders, setOrders] = useState(undefined);

  useEffect(() => {
    (async () => {
      // const userId = localStorage.getItem('orders').userId;
      const userId = client === 'customer' ? NUMBER_THREE : NUMBER_TWO;
      requestApi(`/${client}/orders/${userId}`)
        .then((response) => setOrders(response))
        .catch((error) => console.log(error));
    })();
  }, [client]);

  return (
    <div>
      {
        orders ? orders.map((order) => (
          <Link
            key={ order.id }
            to={ `/${client}/orders/${order.id}` }
            params={ order.id }
          >
            { client === 'customer' ? (
              <OrderCard
                id={ order.id }
                saleDate={ order.saleDate }
                totalPrice={ order.totalPrice }
                status={ order.status }
                onClick={ () => console.log('clicou') }
              />
            ) : (
              <OrderCardSeller
                id={ order.id }
                saleDate={ order.saleDate }
                totalPrice={ order.totalPrice }
                status={ order.status }
                deliveryAddress={ order.deliveryAddress }
                deliveryNumber={ order.deliveryNumber }
                onClick={ () => console.log('clicou') }
              />
            ) }
          </Link>
        )) : <p>Carregando...</p>
      }
    </div>
  );
}

OrdersList.propTypes = {
  client: PropTypes.string.isRequired,
};

export default OrdersList;
