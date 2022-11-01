import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Header({ user }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('user', '');
    navigate('/login');
  };

  return (
    <header>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
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

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Header;
