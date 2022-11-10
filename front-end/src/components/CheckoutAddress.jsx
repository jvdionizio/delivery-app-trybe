/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Text from './styles/Text';
import SelectRoot from './styles/SelectRoot';
import SelectSelect from './styles/SelectSelect';
import TextInputRoot from './styles/TextInputRoot';
import TextInputInput from './styles/TextInputInput';
import Button from './styles/Button';
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
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const finishedOrder = async () => {
    const carrinho = JSON.parse(localStorage.getItem('cart'));
    const { token } = JSON.parse(localStorage.getItem('user')) || '';
    const products = carrinho.map((prod) => ({
      id: prod.itemNumber,
      quantity: prod.quantity,
    }));
    await axios.post(URL, {
      userId: 3,
      sellerId: 2,
      totalPrice: carrinho
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
    <div
      className="
        w-full
        border
        border-gray-100
        shadow-md
        px-3
        py-3
        bg-white-1000
        flex
        flex-col
        gap-6
      "
    >
      <div className="flex w-full items-center justify-around">
        <div className="w-2/6 flex flex-col justify-between">
          <Text>
            <p>Pessoa Vendedora Responsável</p>
          </Text>
          <SelectRoot>
            <SelectSelect
              data-testid="customer_checkout__select-seller"
              id="salesPerson"
            >
              <option
                value="Fulana"
              >
                Fulana Pereira
              </option>
            </SelectSelect>
          </SelectRoot>
        </div>
        <div className="w-2/6 flex flex-col justify-between">
          <Text asChild>
            <p>Endereço</p>
          </Text>
          <TextInputRoot>
            <TextInputInput
              data-testid="customer_checkout__input-address"
              id="deliveryAddress"
              type="text"
              name="deliveryAddress"
              placeholder="Rua / Av."
              value={ address.deliveryAddress }
              onChange={ handleChange }
            />
          </TextInputRoot>
        </div>
        <div className="w-1/6 flex flex-col justify-between">
          <Text asChild>
            <p>Número</p>
          </Text>
          <TextInputRoot>
            <TextInputInput
              data-testid="customer_checkout__input-address-number"
              id="deliveryNumber"
              type="text"
              name="deliveryNumber"
              placeholder="0000"
              value={ address.deliveryNumber }
              onChange={ handleChange }
            />
          </TextInputRoot>
        </div>
      </div>
      <div>
        <Button>
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
            onClick={ finishedOrder }
          >
            Finalizar Pedido
          </button>
        </Button>
      </div>
    </div>
  );
}

export default CheckoutAddress;
