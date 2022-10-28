import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [checkoutProduct, setCheckoutProduct] = useState([]);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    setCheckoutProduct(carrinho);
  }, []);

  const contextValue = useMemo(() => ({
    checkoutProduct,
    setCheckoutProduct,
  }), [checkoutProduct]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
