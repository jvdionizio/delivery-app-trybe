/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { changeStatus } from '../services/requests';
import Button from './styles/Button';
import Text from './styles/Text';

const FOUR_DIGITS = 4;
const DELIVERY = 'Em Trânsito';

function OrderDetailsInfo({ id, seller, saleDate, status, client }) {
  const [deliveryState, setDeliveryState] = useState(status);
  // ...

  function formatDate(date) {
    const dateTime = new Date(date);
    const localDate = dateTime.toLocaleDateString('pt-BR');
    return localDate;
  }

  const changeStatusOrder = (orderId, newStatus) => {
    setDeliveryState(newStatus);
    changeStatus(orderId, newStatus)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleClickCustomer = (e) => {
    e.preventDefault();
    changeStatusOrder(id, 'Entregue');
  };

  const handleClickPreparing = (e) => {
    e.preventDefault();
    changeStatusOrder(id, 'Preparando');
  };

  const handleClickDispatch = (e) => {
    e.preventDefault();
    changeStatusOrder(id, 'Em Trânsito');
  };

  const bgColor = () => {
    if (deliveryState === 'Entregue') return 'bg-blue';
    if (deliveryState === 'Preparando') return 'bg-yellow-200';
    return 'bg-yellow-500';
  };

  return (
    <div>
      <Text>
        Detalhes do Pedido
      </Text>
      <div className="flex items-center justify-between w-full gap-5">
        <div>
          <Text asChild decoration="bold">
            <p
              className="whitespace-nowrap"
              data-testid={ `${client}_order_details__element-order-details-label-order-id` }
            >
              {`PEDIDO: ${String(id).padStart(FOUR_DIGITS, '0')}`}
            </p>
          </Text>
        </div>
        <div>
          <Text asChild decoration="bold">
            <p
              className="whitespace-nowrap"
              data-testid={ `${client}_order_details__element-order-details-label-seller-name` }
            >
              {`P. Vend: ${seller}`}
            </p>
          </Text>
        </div>
        <div>
          <Text asChild decoration="bold">
            <p
              data-testid={ `${client}_order_details__element-order-details-label-order-date` }
            >
              {formatDate(saleDate)}
            </p>
          </Text>
        </div>
        <div className={ `px-2 py-1 ${bgColor()} rounded` }>
          <Text asChild decoration="bold">
            <p
              data-testid={
                `${client}_order_details__element-order-details-label-delivery-status`
              }
            >
              {deliveryState}
            </p>
          </Text>
        </div>
        {
          client === 'customer' && (
            <div>
              <Button remove>
                <button
                  type="button"
                  onClick={ handleClickCustomer }
                  data-testid={ `${client}_order_details__button-delivery-check` }
                  disabled={ deliveryState !== DELIVERY }
                >
                  Marcar como Entregue
                </button>
              </Button>
            </div>
          )
        }
        {
          client === 'seller' && (
            <>
              <div>
                <Button remove>
                  <button
                    type="button"
                    onClick={ handleClickPreparing }
                    data-testid={ `${client}_order_details__button-preparing-check` }
                    disabled={ deliveryState !== 'Pendente' }
                  >
                    Preparar Pedido
                  </button>
                </Button>
              </div>
              <div>
                <Button remove>
                  <button
                    type="button"
                    onClick={ handleClickDispatch }
                    data-testid={ `${client}_order_details__button-dispatch-check` }
                    disabled={ deliveryState !== 'Preparando' }
                  >
                    Saiu para Entrega
                  </button>
                </Button>
              </div>
            </>
          )
        }
      </div>
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
