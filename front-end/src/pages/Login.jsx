/* eslint-disable react/jsx-max-depth */
import { Envelope, Lock } from 'phosphor-react';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/styles/Button';
import Text from '../components/styles/Text';
import TextInputIcon from '../components/styles/TextInputIcon';
import TextInputInput from '../components/styles/TextInputInput';
import TextInputRoot from '../components/styles/TextInputRoot';
import { postLogin, setToken, verifyToken } from '../services/requests';
import favLogo from '../images/fav-logo.svg';
import Heading from '../components/styles/Heading';

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
      console.log(error);
      setLoginFailed({ message: error.response.data.message });
    }
  };

  return (
    <div
      className="
        w-screen
        h-screen
        flex
        flex-row
        items-center
        bg-white-smoked
      "
    >
      <div className="flex flex-col w-3/12 gap-8 mx-auto my-auto">
        <div className="flex flex-col items-center gap-0">
          <img src={ favLogo } alt="logótipo bora beber" className="w-64" />
          <div>
            <Heading asChild>
              <h1>Bora Beber</h1>
            </Heading>
            <Text size="lg" asChild>
              <p>Faça login e começa a usar</p>
            </Text>
          </div>
        </div>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Text size="md" textColor="400" asChild decoration="semibold">
              <p>Endereço de e-mail</p>
            </Text>
            <TextInputRoot error={ loginFailed.message }>
              <TextInputIcon>
                <Envelope />
              </TextInputIcon>
              <TextInputInput
                name="email"
                type="email"
                data-testid="common_login__input-email"
                placeholder="Digite seu email"
                value={ login.email }
                onChange={ handleChange }
              />
            </TextInputRoot>
            <Text textColor="400" size="md" asChild decoration="semibold">
              <p>Sua senha</p>
            </Text>
            <TextInputRoot error={ loginFailed.message }>
              <TextInputIcon>
                <Lock />
              </TextInputIcon>
              <TextInputInput
                name="password"
                type="password"
                data-testid="common_login__input-password"
                placeholder="*********"
                value={ login.password }
                onChange={ handleChange }
              />
            </TextInputRoot>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button>
              <button
                type="submit"
                data-testid="common_login__button-login"
                preventdefault="true"
                disabled={ login.IsDisable }
                onClick={ (event) => handleClick(event) }
              >
                Entrar na plataforma
              </button>
            </Button>
            <Text textColor="red" size="md" asChild decoration="semibold">
              <p
                data-testid="common_login__element-invalid-email"
              >
                {loginFailed.message}
              </p>
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Text
              textColor="400"
              size="xs"
              asChild
              decoration="underline"
            >
              <p>Esqueceu sua senha?</p>
            </Text>
            <Link to="/register">
              <Text textColor="400" size="xs" asChild decoration="underline">
                <p>Não possui conta? Crie uma agora!</p>
              </Text>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
