import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Context from '../context/Context';

const URL = 'http://localhost:3001/customer/checkout/';

function CheckoutAddress() {
  const [address, setAddress] = useState({
    deliveryAddress: '',
    deliveryNumber: '',
  });

  // const { checkoutProduct } = useContext(Context);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(value);
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const finishedOrder = async () => {
    const total = JSON.parse(localStorage.getItem('cart'));
    const { token } = JSON.parse(localStorage.getItem('user')) || '';
    const products = total.map((prod) => ({
      id: prod.itemNumber,
      quantity: prod.quantity,
    }));
    await axios.post(URL, {
      userId: 3,
      sellerId: 2,
      totalPrice: total
        .reduce((acc, val) => acc + (val.price * val.quantity), 0)
        .toFixed(2),
      deliveryAddress: address.deliveryAddress,
      deliveryNumber: address.deliveryNumber,
      products,
    }, {
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        navigate(`/customer/orders/${response.data}`, { replace: true });
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <div>
      <div>
        <p>Detalhes e Endereço para Entrega</p>
      </div>
      <div>
        <label htmlFor="salesPerson">
          P. Vendedora Responsável
          <select
            data-testid="customer_checkout__select-seller"
            id="salesPerson"
          >
            <option
              value="Fulana"
            >
              Fulana Pereira
            </option>
          </select>
        </label>
        <label htmlFor="deliveryAddress">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            id="deliveryAddress"
            type="text"
            name="deliveryAddress"
            value={ address.deliveryAddress }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="deliveryNumber">
          Número
          <input
            data-testid="customer_checkout__input-address-number"
            id="deliveryNumber"
            type="text"
            name="deliveryNumber"
            value={ address.deliveryNumber }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ finishedOrder }
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default CheckoutAddress;
