import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { requestApi } from '../services/requests';
import OrderProducts from './OrdersProducts';
import OrderDetailsInfo from './OrderDetailsInfo';

function OrderDetailsList({ client }) {
  const [orders, setOrders] = useState(undefined);
  const [products, setProducts] = useState(undefined);
  const [seller, setSeller] = useState(undefined);
  const { pathname } = useLocation();

  console.log(client);

  useEffect(() => {
    (async () => {
      const idFromUrl = pathname.split('/')[3];
      requestApi(`/customer/orders/details/${idFromUrl}`)
        .then((response) => setOrders(response))
        .catch((error) => console.log(error));
    })();
  }, [pathname]);

  useEffect(() => {
    if (orders?.sellerId) {
      (async () => {
        requestApi(`/customer/orders/seller/${orders.sellerId}`)
          .then((response) => setSeller(response.name))
          .catch((error) => console.log(error));
      })();
      setProducts(orders?.salesProducts);
    }
  }, [orders]);

  return (
    <div className="w-11/12">
      {
        orders && (
          <OrderDetailsInfo
            id={ orders?.id }
            seller={ seller }
            saleDate={ orders?.saleDate }
            status={ orders?.status }
            client={ client }
          />
        )
      }
      {
        products ? (
          <OrderProducts products={ products } />
        ) : <p>Carregando...</p>
      }
    </div>
  );
}

OrderDetailsList.propTypes = {
  client: PropTypes.string.isRequired,
};

export default OrderDetailsList;
