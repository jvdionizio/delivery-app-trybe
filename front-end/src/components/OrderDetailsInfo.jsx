import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { changeStatus } from '../services/requests';

const FOUR_DIGITS = 4;
function OrderDetailsInfo({ id, seller, saleDate, status }) {
  const [nextStatus, setNextStatus] = useState('Pendente');

  const changeStatusOrder = (orderId) => {
    changeStatus(orderId, nextStatus)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleClick = (e) => {
    e.preventDefault();
    changeStatusOrder(id);
  };

  useEffect(() => {
    switch (status) {
    case 'Pendente':
      setNextStatus('Preparando');
      break;
    case 'Preparando':
      setNextStatus('Em Trânsito');
      break;
    case 'Em Trânsito':
      setNextStatus('Entregue');
      break;
    default:
      setNextStatus('');
    }
  }, [status]);

  return (
    <div>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`Pedido: ${String(id).padStart(FOUR_DIGITS, '0')}`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`P. Vend: ${seller}`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {saleDate}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status.toUpperCase()}
      </p>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="customer_order_details__button-delivery-check"
      >
        { `Marcar como ${nextStatus} `}
      </button>
    </div>
  );
}

OrderDetailsInfo.defaultProps = {
  seller: 'Loading...',
};

OrderDetailsInfo.propTypes = {
  id: PropTypes.number.isRequired,
  seller: PropTypes.string,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderDetailsInfo;
