import PropTypes from 'prop-types';
import React from 'react';

const FOUR_DIGITS = 4;

function OrderCardSeller({
  id, saleDate, totalPrice, status, deliveryAddress, deliveryNumber }) {
  // function formatDate(date) {
  //   console.log(date);
  //   const dateTime = new Date(date);
  //   const day = dateTime.getDate();
  //   const month = dateTime.getMonth();
  //   const year = dateTime.getFullYear();
  //   return [day, month, year].join('/');
  // }

  const divBorder = {
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
  };

  return (
    <div
      style={ divBorder }
    >
      <p
        data-testid={ `seller_orders__element-order-id-${id}` }
      >
        {`Pedido ${String(id).padStart(FOUR_DIGITS, '0')}`}
      </p>
      <p
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      >
        {status.toUpperCase()}
      </p>
      <p
        data-testid={ `seller_orders__element-order-date-${id}` }
      >
        {saleDate}
      </p>
      <p
        data-testid={ `seller_orders__element-card-price-${id}` }
      >
        {`R$ ${String(totalPrice).replace('.', ',')}`}
      </p>
      <p
        data-testid={ `seller_orders__element-card-address-${id}` }
      >
        {`Endereço: ${deliveryAddress}, ${deliveryNumber}`}
      </p>
    </div>
  );
}

OrderCardSeller.propTypes = {
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
};

export default OrderCardSeller;
