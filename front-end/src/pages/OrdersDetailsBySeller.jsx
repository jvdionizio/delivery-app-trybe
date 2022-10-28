import React from 'react';
import OrderDetailsList from '../components/OrderDetailsList';

function Orders() {
  return (
    <div>
      <p>Detalhe do Pedido</p>
      <OrderDetailsList client="seller" />
    </div>
  );
}

export default Orders;
