import PropTypes from 'prop-types';
import React from 'react';

function OrdersProductCard({ index, product, client }) {
  console.log(product);

  function subTotalPerItem() {
    const quantity = Number(product.productsSales.quantity);
    const price = Number(product.price);
    const subTotal = quantity * price;
    return subTotal;
  }

  const divBorder = {
    display: 'flex',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
  };

  return (
    <div style={ divBorder }>
      <p
        data-testid={
          `${client}_order_details__element-order-table-item-number-${index}`
        }
      >
        { index }
      </p>
      <p
        data-testid={
          `${client}_order_details__element-order-details-label-delivery-status${index}`
        }
      >
        { product.name }
      </p>
      <p
        data-testid={
          `${client}_order_details__element-order-table-quantity-${index}`
        }
      >
        { product.productsSales.quantity }
      </p>
      <p
        data-testid={
          `${client}_order_details__element-order-table-unit-price-${index}`
        }
      >
        {`R$${String(product.price).replace('.', ',')}`}
      </p>
      <p
        data-testid={
          `${client}_order_details__element-order-table-sub-total-${index}`
        }
      >
        {`R$${String(subTotalPerItem().toFixed(2)).replace('.', ',')}`}
      </p>
    </div>
  );
}

OrdersProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    productsSales: PropTypes.shape({
      quantity: PropTypes.number,
    }),
  }).isRequired,
  client: PropTypes.string.isRequired,
};

export default OrdersProductCard;
