import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';
import OrderCardSeller from './OrderCardSeller';
import { requestApi } from '../services/requests';

function OrdersList({ client, userId }) {
  const [orders, setOrders] = useState(undefined);

  useEffect(() => {
    (async () => {
      requestApi(`/${client}/orders/${userId}`)
        .then((response) => setOrders(response))
        .catch((error) => console.log(error));
    })();
  }, [client, userId]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      {
        orders ? orders.map((order) => (
          <Link
            key={ order.id }
            to={ `/${client}/orders/${order.id}` }
            params={ order.id }
            className="
              2xl:w-1/2
              xl:w-1/2
              lg:w-1/2
              md:w-5/6
              flex
              flex-col
              items-center
            "
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
        )) : <p>Não existe nenhuma venda...</p>
      }
    </div>
  );
}

OrdersList.propTypes = {
  client: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default OrdersList;
