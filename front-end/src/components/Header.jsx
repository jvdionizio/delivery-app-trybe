import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, SignOut } from 'phosphor-react';
import HeaderBtn from './styles/HeaderBtn';
import Context from '../context/Context';
import Text from './styles/Text';
import HeaderIcon from './styles/HeaderIcon';
import favLogo from '../images/fav-logo.svg';

function Header({ client, user }) {
  const { totalPrice } = useContext(Context);
  const navigate = useNavigate();
  const { setSelected, selected } = useContext(Context);
  const { pathname } = useLocation();

  const logout = () => {
    localStorage.setItem('user', '');
    navigate('/login');
  };

  const checkPath = () => {
    const pathName = pathname.split('/')[2];
    console.log(pathName);
    const productsSelected = {
      products: true,
      orders: false,
    };
    const ordersSelected = {
      products: false,
      orders: true,
    };
    console.log(pathName);
    if (pathName === 'products') {
      setSelected(productsSelected);
    } else {
      setSelected(ordersSelected);
    }
  };

  useEffect(() => {
    checkPath();
  }, []);

  return (
    <header
      className="
        w-full
        flex
        flex-row
        items-center
        justify-between
        p-4
        bg-white-smoked
        top-0
        fixed
      "
    >
      <div className="w-full flex items-center gap-6">
        <img src={ favLogo } alt="logótipo bora beber" className="w-11 mb-3" />
        <div className="flex items-center gap-3">
          { client === 'customer' && (
            <HeaderBtn
              selected={ selected.products }
            >
              <button
                type="button"
                data-testid="customer_products__element-navbar-link-products"
                id="products"
                onClick={ () => navigate('/customer/products') }
              >
                Produtos
              </button>
            </HeaderBtn>
          ) }
          <HeaderBtn
            selected={ selected.orders }
          >
            <button
              data-testid="customer_products__element-navbar-link-orders"
              type="button"
              id="orders"
              onClick={ () => navigate(`/${client}/orders`) }
            >
              Meus Pedidos
            </button>
          </HeaderBtn>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Text
          data-testid="customer_products__element-navbar-user-full-name"
          decoration="semibold"
          size="lg"
          asChild
        >
          <p className="whitespace-nowrap">
            { user }
          </p>
        </Text>
        <button
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => navigate('/customer/checkout') }
          disabled={ totalPrice === '0,00' }
          className="flex items-center gap-1 bg-white-smoked"
        >
          <HeaderIcon>
            <ShoppingCart />
          </HeaderIcon>
          <div
            className={
              `
                absolute
                mt-14
                right-5
                bg-white-smoked
                rounded-full
                p-1
                ${totalPrice === '0,00' ? 'hidden' : ''}
              `
            }
          >
            <Text
              decoration="semibold"
              data-testid="customer_products__checkout-bottom-value"
            >
              {` R$${totalPrice}`}
            </Text>
          </div>
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logout() }
        >
          <HeaderIcon>
            <SignOut />
          </HeaderIcon>
        </button>
      </div>
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
