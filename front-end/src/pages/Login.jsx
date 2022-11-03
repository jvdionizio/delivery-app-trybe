import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postLogin, setToken, verifyToken } from '../services/requests';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    IsDisable: true,
  });
  const [loginFailed, setLoginFailed] = useState({
    message: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const currentUser = localStorage?.getItem('user');
      if (currentUser) {
        const parsed = JSON.parse(currentUser);
        const logged = await verifyToken(parsed.token);
        if (logged && parsed.role === 'customer') {
          navigate(`/${parsed.role}/products`);
        }
      }
    })();
  }, [navigate]);

  const validateButton = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const SEIS = 5;
    const { email, password } = login;
    // console.log(emailRegex.test(email));
    if ((emailRegex.test(email)) && password.length >= SEIS) {
      setLogin((state) => ({
        ...state,
        IsDisable: false,

      }));
    } else {
      setLogin((state) => ({
        ...state,
        IsDisable: true,
      }));
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin((state) => ({
      ...state,
      [name]: value,
    }));
    validateButton();
  };

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const userObj = await postLogin(login.email, login.password);
      const { role } = userObj;

      setToken(userObj.token);

      localStorage.setItem('user', JSON.stringify(userObj));

      switch (role) {
      case 'administrator':
        navigate('/admin/manage', { replace: true });
        break;
      case 'seller':
        navigate('/seller/orders', { replace: true });
        break;
      default:
        navigate('/customer/products', { replace: true });
        break;
      }
    } catch (error) {
      setLoginFailed({ message: error.message });
    }
  };

  return (
    <div>
      <div>
        <Text/>
      </div>
      <form>
        <label htmlFor="email">
          Email
          <div>
            <input
              name="email"
              type="email"
              data-testid="common_login__input-email"
              value={ login.email }
              onChange={ handleChange }
            />
          </div>
        </label>
        <label htmlFor="password">
          Password
          <div>
            <input
              name="password"
              type="password"
              data-testid="common_login__input-password"
              value={ login.password }
              onChange={ handleChange }
            />
          </div>
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
          preventdefault="true"
          disabled={ login.IsDisable }
          onClick={ (event) => handleClick(event) }
        >
          Login
        </button>
        <Link to="/register">
          <button
            type="submit"
            data-testid="common_login__button-register"
          >
            Register
          </button>
        </Link>
      </form>
      <p
        data-testid="common_login__element-invalid-email"
      >
        {loginFailed.message}
      </p>
    </div>
  );
}

export default Login;
