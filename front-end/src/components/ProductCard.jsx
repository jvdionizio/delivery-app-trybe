import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ price, image, name, id }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (event) => {
    const { value } = event.target;
    setQuantity(Number(value));
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      <span data-testid={ `customer_products__element-card-price-${id}>` }>{price}</span>
      <img
        src={ image }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <span data-testid={ `customer_products__element-card-title-${id}` }>{name}</span>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ increaseQuantity }
        >
          +
        </button>
        <input
          type="number"
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ handleQuantity }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ decreaseQuantity }

        >
          -
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
};

export default ProductCard;
