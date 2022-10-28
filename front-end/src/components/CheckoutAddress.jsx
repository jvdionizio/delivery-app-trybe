import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';

const URL = 'http://localhost:3001/customer/checkout/';

function CheckoutAddress() {
  const [address, setAddress] = useState({
    deliveryAdress: '',
    deliveryNumber: '',
  });

  const { checkoutProduct } = useContext(Context);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(value);
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const finishedOrder = () => {
    console.log(checkoutProduct);
    const total = JSON.parse(localStorage.getItem('carrinho'));
    axios.post(URL, {
      userId: 1,
      sellerId: 1,
      totalPrice: total.reduce((acc, value) => acc + value.subTotal, 0).toFixed(2),
      deliveryAddress: address.deliveryAdress,
      deliveryNumber: address.deliveryNumber,
      status: 'Pendente',
      products: checkoutProduct.map((products) => ({
        id: products.itemNumber,
        quantity: products.quantity,
      })),
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
        <div>
          <p>Detalhes e Endereço para Entrega</p>
        </div>
        <div>
          <label htmlFor="salesPerson">
            P. Vendedora Responsável
            <select id="salesPerson">
              <option
                data-testid="customer_checkout__select-seller"
                value="Fulana"
              >
                Fulana Pereira
              </option>
            </select>
          </label>
          <label htmlFor="deliveryAdress">
            Endereço
            <input
              data-testid="customer_checkout__input-address"
              id="deliveryAdress"
              type="text"
              name="deliveryAdress"
              value={ address.deliveryAdress }
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
    </div>
  );
}

export default CheckoutAddress;
