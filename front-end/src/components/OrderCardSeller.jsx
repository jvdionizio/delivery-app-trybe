import PropTypes from 'prop-types';
import React from 'react';
import CardOrder from './styles/CardOrder';
import Text from './styles/Text';

const FOUR_DIGITS = 4;

function OrderCardSeller({
  id, saleDate, totalPrice, status, deliveryAddress, deliveryNumber }) {
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
        flex-col
      "
    >
      <div className="flex">
        <CardOrder>
          <Text>
            <p
              data-testid={ `seller_orders__element-order-id-${id}` }
            >
              {`Pedido ${String(id).padStart(FOUR_DIGITS, '0')}`}
            </p>
          </Text>
        </CardOrder>
        <CardOrder status={ status }>
          <Text>
            <p
              data-testid={ `seller_orders__element-delivery-status-${id}` }
            >
              {status}
            </p>
          </Text>
        </CardOrder>
        <CardOrder>
          <p
            data-testid={ `seller_orders__element-order-date-${id}` }
          >
            {formatDate(saleDate)}
          </p>
          <p
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            {`R$ ${String(totalPrice).replace('.', ',')}`}
          </p>
        </CardOrder>
      </div>
      <div className="self-end">
        <Text asChild>
          <p
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            {`Endereço: ${deliveryAddress}, ${deliveryNumber}`}
          </p>
        </Text>
      </div>
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
