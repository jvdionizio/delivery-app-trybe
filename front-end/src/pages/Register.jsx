import React, { useState } from 'react';

function Register() {
  const [register, setRegister] = useState({
    email: '',
    password: '',
    name: '',
    IsDisable: true,
  });

  const validateButton = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const SEIS = 5;
    const DOZE = 11;
    const { email, password, name } = register;
    // console.log(emailRegex.test(email));
    if ((emailRegex.test(email)) && password.length >= SEIS && name.length >= DOZE) {
      setRegister((state) => ({
        ...state,
        IsDisable: false,

      }));
    } else {
      setRegister((state) => ({
        ...state,
        IsDisable: true,
      }));
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegister((state) => ({
      ...state,
      [name]: value,
    }));
    validateButton();
  };

  return (
    <div>
      Cadastro
      <form>
        <label htmlFor="name">
          Nome
          <div>
            <input
              name="name"
              type="name"
              data-testid="common_register__input-name"
              onChange={ handleChange }
            />
          </div>
        </label>
        <label htmlFor="email">
          Email
          <div>
            <input
              name="email"
              type="email"
              data-testid="common_register__input-email"
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
              data-testid="common_register__input-password"
              onChange={ handleChange }
            />
          </div>
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
          preventdefault="true"
          disabled={ register.IsDisable }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Register;
