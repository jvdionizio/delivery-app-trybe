/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React from 'react';
import TableTD from './styles/TableTD';
import TableTH from './styles/TableTH';
import Text from './styles/Text';
// import Context from '../context/Context';

function OrderProducts({ products }) {
  console.log(products);
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
        gap-4
        mt-4
      "
    >
      <table id="feedback">
        <tbody>
          <tr className="w-full">
            <TableTH>
              <th>Item</th>
            </TableTH>
            <TableTH>
              <th>Descrição</th>
            </TableTH>
            <TableTH>
              <th>Quantidade</th>
            </TableTH>
            <TableTH>
              <th>Valor Unitário</th>
            </TableTH>
            <TableTH>
              <th>Sub-total</th>
            </TableTH>
          </tr>
          {products && products.map((product, index) => (
            <tr key={ product.id }>
              <TableTD>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
              </TableTD>
              <TableTD productName>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {product.name}
                </td>
              </TableTD>
              <TableTD>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {product.productsSales.quantity}
                </td>
              </TableTD>
              <TableTD>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { Number(product.price).toFixed(2).replace('.', ',') }
                </td>
              </TableTD>
              <TableTD>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { Number(product.productsSales.quantity * product.price).toFixed(2).replace('.', ',') }
                </td>
              </TableTD>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="self-end">
        <Text
          decoration="bold"
          data-testid="customer_checkout__element-order-total-price"
        >
          Total:
          {' '}
          {
            products && products
              .reduce((acc, val) => acc + (val.price * val.productsSales.quantity), 0)
              .toFixed(2).replace('.', ',')
          }
        </Text>
      </div>
    </div>
  );
}

OrderProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    productsSales: PropTypes.shape({
      quantity: PropTypes.number.isRequired,
    }).isRequired,
    urlImage: PropTypes.string.isRequired,
  })).isRequired,
};

export default OrderProducts;
