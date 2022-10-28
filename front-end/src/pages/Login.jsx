import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    IsDisable: true,
  });

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

  return (
    <div>
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
      />
    </div>
  );
}

export default Login;
