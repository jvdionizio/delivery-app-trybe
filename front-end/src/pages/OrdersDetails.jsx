import React, { useEffect, useState } from 'react';
import OrderDetailsList from '../components/OrderDetailsList';

function OrdersDetails() {
  const [role, setRole] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setRole(user.role || 'customer');
  }, []);

  return (
    <div>
      <p>Detalhe do Pedido</p>
      <OrderDetailsList client={ role } />
    </div>
  );
}

export default OrdersDetails;
