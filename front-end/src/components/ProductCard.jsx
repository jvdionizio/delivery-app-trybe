import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

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
    <div>
      <span>R$ </span>
      <span
        data-testid={ `customer_products__element-card-price-${dataTestId}` }
      >
        {Number(price).toFixed(2).replace('.', ',')}
      </span>
      <img
        src={ image }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${dataTestId}` }
        style={ { width: 200 } }
      />
      <span
        data-testid={ `customer_products__element-card-title-${dataTestId}` }
      >
        {name}
      </span>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ decreaseQuantity }
        >
          -
        </button>
        <input
          type="number"
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ handleQuantity }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${dataTestId}` }
          onClick={ increaseQuantity }
        >
          +
        </button>
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
