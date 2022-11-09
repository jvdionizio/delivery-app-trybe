/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { Minus, Plus } from 'phosphor-react';
import Context from '../context/Context';
import TextInputInput from './styles/TextInputInput';
import Text from './styles/Text';

function ProductCard({ price, image, name, id, dataTestId }) {
  const { setTotalPrice } = useContext(Context);
  const [quantity, setQuantity] = useState(0);
  const didMount = useRef(false);

  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    return cart;
  };

  const changeTotal = () => {
    const total = getCart().reduce((acc, curr) => {
      const totalItem = Number(curr.price) * Number(curr.quantity);
      return acc + totalItem;
    }, 0);

    setTotalPrice(total.toFixed(2).replace('.', ','));
  };

  const changeCart = () => {
    const cartItems = getCart().filter((item) => Number(item.itemNumber) !== id);

    const newProduct = {
      itemNumber: id,
      name,
      price,
      quantity,
    };

    localStorage.setItem('cart', JSON.stringify([...cartItems, newProduct]));
    changeTotal();
  };

  const handleQuantity = (event) => {
    const { value } = event.target;
    setQuantity(Number(value));

    changeCart();
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    if (quantity === 0) {
      const cartItems = getCart().filter((item) => Number(item.itemNumber) !== id);

      localStorage.setItem('cart', JSON.stringify(cartItems));
      changeTotal();
    } else {
      changeCart();
    }
  }, [quantity]);

  return (
    <div
      className="
          2xl:w-1/6
          xl:w-1/5
          lg:w-1/5
          md:w-1/4
          sm:w-1/2
          h-72
          flex
          flex-col
          items-center
          rounded
          ring-1
          ring-gray-200
        "
    >
      <img
        src={ image }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${dataTestId}` }
        className="max-h-48"
      />
      <div
        className="
          w-full
          h-full
          flex
          flex-col
          items-center
          justify-between
          bg-yellow-200
        "
      >
        <div className="w-full flex justify-between p-2">
          <Text
            size="sm"
            decoration="semibold"
            data-testid={ `customer_products__element-card-title-${dataTestId}` }
          >
            {name}
          </Text>
          <span className="flex flex-nowrap">
            <Text size="sm" decoration="semibold">R$ </Text>
            <Text
              size="sm"
              decoration="semibold"
              data-testid={ `customer_products__element-card-price-${dataTestId}` }
            >
              {Number(price).toFixed(2).replace('.', ',')}
            </Text>
          </span>
        </div>
        <div
          className="
            w-1/4
            flex
            items-center
            justify-center
            mb-2
          "
        >
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ decreaseQuantity }
            className="h-full bg-yellow-500 rounded-l-lg px-1"
          >
            <Minus />
          </button>
          <TextInputInput
            type="number"
            inputType="number"
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ handleQuantity }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${dataTestId}` }
            onClick={ increaseQuantity }
            className="h-full bg-yellow-500 rounded-r-lg px-1"
          >
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  dataTestId: PropTypes.number.isRequired,
};

export default ProductCard;
