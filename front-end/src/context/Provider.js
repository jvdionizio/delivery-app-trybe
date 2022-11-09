import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [checkoutProduct, setCheckoutProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0,00');
  const [users, setUsers] = useState({
    message: 'certo',
  });
  const [selected, setSelected] = useState({
    products: true,
    orders: false,
  });

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('cart'));
    setCheckoutProduct(carrinho);
  }, []);

  const value = useMemo(() => ({
    selected,
    setSelected,
    users,
    setUsers,
    totalPrice,
    setTotalPrice,
    checkoutProduct,
    setCheckoutProduct,
  }), [users, totalPrice, checkoutProduct, selected]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
