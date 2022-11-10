import PropTypes from 'prop-types';
import React from 'react';
import CardOrder from './styles/CardOrder';
import Text from './styles/Text';

const FOUR_DIGITS = 4;

function OrderCard({ id, saleDate, totalPrice, status }) {
  function formatDate(date) {
    const dateTime = new Date(date);
    const localDate = dateTime.toLocaleDateString('pt-BR');
    return localDate;
  }

  return (
    <div
      className="
        w-full
        border
        border-gray-100
        shadow-md
        px-3
        py-2
        bg-white-1000
        flex
      "
    >
      <CardOrder>
        <Text decoration="semibold" asChild>
          <p
            data-testid={ `customer_orders__element-order-id-${id}` }
          >
            {`Pedido ${String(id).padStart(FOUR_DIGITS, '0')}`}
          </p>
        </Text>
      </CardOrder>
      <CardOrder status={ status }>
        <Text decoration="semibold" asChild uppercase>
          <p
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            {status}
          </p>
        </Text>
      </CardOrder>
      <CardOrder>
        <Text asChild>
          <p
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            {formatDate(saleDate)}
          </p>
        </Text>
        <Text asChild>
          <p
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            {`R$ ${String(totalPrice).replace('.', ',')}`}
          </p>
        </Text>
      </CardOrder>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderCard;
