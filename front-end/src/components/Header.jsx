import React from 'react';

function Header() {
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
        Usuario
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </header>
  );
}

export default Header;
