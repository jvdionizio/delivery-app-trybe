import React, { useEffect, useState } from 'react';
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
    <div>
      <table id="feedback">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          {checkoutProduct && checkoutProduct.map((product, index) => (
            <tr key={ product.itemNumber }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                {product.name}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {product.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { Number(product.price).toFixed(2).replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { Number(product.quantity * product.price).toFixed(2).replace('.', ',') }
              </td>
              <td>
                <button
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                  type="button"
                  onClick={ () => removeItem(product) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          Total:
          {' '}
          {
            checkoutProduct && checkoutProduct
              .reduce((acc, val) => acc + (val.price * val.quantity), 0)
              .toFixed(2).replace('.', ',')
          }
        </span>
      </div>
    </div>
  );
}

export default CheckoutProducts;
