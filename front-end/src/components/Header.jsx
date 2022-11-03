import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Header({ client, user }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('user', '');
    navigate('/login');
  };

  return (
    <header>
      { client === 'customer' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => navigate('/customer/products') }
        >
          Produtos
        </button>
      ) }
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate(`/${client}/orders`) }
      >
        Meus pedidos
      </button>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { user }
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        Sair
      </button>
    </header>
  );
}

Header.defaultProps = {
  client: 'customer',
  user: '',
};

Header.propTypes = {
  user: PropTypes.string,
  client: PropTypes.string,
};

export default Header;
