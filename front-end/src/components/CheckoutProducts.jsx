/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React, { useEffect, useState } from 'react';
import Button from './styles/Button';
import TableTD from './styles/TableTD';
import TableTH from './styles/TableTH';
import Text from './styles/Text';
// import Context from '../context/Context';

function CheckoutProducts() {
  const [checkoutProduct, setCheckoutProduct] = useState([]);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('cart'));
    console.log('provider', carrinho);
    setCheckoutProduct(carrinho);
  }, []);

  const removeItem = (product) => {
    // recupera o carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem('cart'));
    // remove o item do selecionado do array
    const removeProductSelected = carrinho
      .filter((products) => products.itemNumber !== product.itemNumber);
    // add atualização do carrinho
    localStorage.setItem('cart', JSON.stringify(removeProductSelected));
    // recupera a nova lista
    const novoCarrinho = JSON.parse(localStorage.getItem('cart'));
    // atualizando o state do carrinho
    setCheckoutProduct(novoCarrinho);
  };

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
            <TableTH>
              <th>Remover Item</th>
            </TableTH>
          </tr>
          {checkoutProduct && checkoutProduct.map((product, index) => (
            <tr key={ product.itemNumber }>
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
                  {product.quantity}
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
                  { Number(product.quantity * product.price).toFixed(2).replace('.', ',') }
                </td>
              </TableTD>
              <TableTD>
                <td>
                  <Button remove>
                    <button
                      data-testid={
                        `customer_checkout__element-order-table-remove-${index}`
                      }
                      type="button"
                      onClick={ () => removeItem(product) }
                    >
                      REMOVER
                    </button>
                  </Button>
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
            checkoutProduct && checkoutProduct
              .reduce((acc, val) => acc + (val.price * val.quantity), 0)
              .toFixed(2).replace('.', ',')
          }
        </Text>
      </div>
    </div>
  );
}

export default CheckoutProducts;
