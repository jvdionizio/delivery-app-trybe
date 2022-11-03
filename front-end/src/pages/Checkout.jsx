import React from 'react';
import CheckoutAddress from '../components/CheckoutAddress';
import CheckoutProducts from '../components/CheckoutProducts';

function Checkout() {
  return (
    <div>
      <div>
        <p>Finalizar Pedido</p>
      </div>
      <div>
        <div>
          <CheckoutProducts />
        </div>
        <div>
          <CheckoutAddress />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
