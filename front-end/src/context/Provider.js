import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [users, setUsers] = useState({
    message: 'certo',
  });

  const [totalPrice, setTotalPrice] = useState('0,00');

  const value = useMemo(() => ({
    users,
    setUsers,
    totalPrice,
    setTotalPrice,
  }), [users, totalPrice]);

  return (
    <Context.Provider
      value={ value }
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
