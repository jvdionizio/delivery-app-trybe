import PropTypes from 'prop-types';
import React from 'react';
import { changeStatus } from '../services/requests';

const FOUR_DIGITS = 4;
function OrderDetailsInfo({ id, seller, saleDate, status, client }) {
  const changeStatusOrder = (orderId, newStatus) => {
    changeStatus(orderId, newStatus)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleClickCustomer = (e) => {
    e.preventDefault();
    if (status === 'Em Trânsito') {
      changeStatusOrder(id, 'Entregue');
    }
    console.log('Status need to be -Em Trânsito-');
  };

  const handleClickPreparing = (e) => {
    e.preventDefault();
    changeStatusOrder(id, 'Preparando');
  };

  const handleClickDispatch = (e) => {
    e.preventDefault();
    changeStatusOrder(id, 'Em Trânsito');
  };

  return (
    <div>
      <p
        data-testid={ `${client}_order_details__element-order-details-label-order-id` }
      >
        {`Pedido: ${String(id).padStart(FOUR_DIGITS, '0')}`}
      </p>
      <p
        data-testid={ `${client}_order_details__element-order-details-label-seller-name` }
      >
        {`P. Vend: ${seller}`}
      </p>
      <p
        data-testid={ `${client}_order_details__element-order-details-label-order-date` }
      >
        {saleDate}
      </p>
      <p
        data-testid={
          `${client}_order_details__element-order-details-label-delivery-status`
        }
      >
        {status.toUpperCase()}
      </p>
      {
        client === 'customer' && (
          <button
            type="button"
            onClick={ handleClickCustomer }
            data-testid={ `${client}_order_details__button-delivery-check` }
          >
            Marcar como Entregue
          </button>
        )
      }
      {
        client === 'seller' && (
          <>
            <button
              type="button"
              onClick={ handleClickPreparing }
              data-testid={ `${client}_order_details__button-preparing-check` }
            >
              Preparar Pedido
            </button>
            <button
              type="button"
              onClick={ handleClickDispatch }
              data-testid={ `${client}_order_details__button-dispatch-check` }
            >
              Saiu para Entrega
            </button>
          </>
        )
      }
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
  client: PropTypes.string.isRequired,
};

export default OrderDetailsInfo;
