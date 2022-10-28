import React, { useContext } from 'react';
import Context from '../context/Context';

const mockProduct = [
  {
    itemNumber: 1,
    name: 'Cerveja Stella 250ml',
    quantity: 3,
    unitPrice: 3.50,
  },
  {
    itemNumber: 2,
    name: 'Cerveja Skol Latão 450ml',
    quantity: 4,
    unitPrice: 4.10,
  },
  {
    itemNumber: 3,
    name: 'Salgadinho Torcida Churrasco',
    quantity: 1,
    unitPrice: 1.56,
  },
];

localStorage.setItem('cart', JSON.stringify(mockProduct));

function CheckoutProducts() {
  const {
    checkoutProduct,
    setCheckoutProduct,
  } = useContext(Context);

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
                  {product.itemNumber}
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
                  {product.unitPrice}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { product.quantity * product.unitPrice }
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
      </div>
      <div>
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          Total:
          {' '}
          {
            checkoutProduct && checkoutProduct
              .reduce((acc, val) => acc + (val.unitPrice * val.quantity), 0).toFixed(2)
          }
        </span>
      </div>
    </div>
  );
}

export default CheckoutProducts;
