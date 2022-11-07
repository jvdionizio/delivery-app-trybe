/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import { Envelope, User, Lock } from 'phosphor-react';
import { Link } from 'react-router-dom';
import Button from '../components/styles/Button';
import Text from '../components/styles/Text';
import TextInputIcon from '../components/styles/TextInputIcon';
import TextInputInput from '../components/styles/TextInputInput';
import TextInputRoot from '../components/styles/TextInputRoot';
import favLogo from '../images/fav-logo.svg';
import Heading from '../components/styles/Heading';

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
        <div>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Text size="md" textColor="400" asChild decoration="semibold">
                <p>Seu nome</p>
              </Text>
              <TextInputRoot>
                <TextInputIcon>
                  <User />
                </TextInputIcon>
                <TextInputInput
                  name="name"
                  type="name"
                  data-testid="common_register__input-name"
                  placeholder="Digite seu nome"
                  value={ register.name }
                  onChange={ handleChange }
                />
              </TextInputRoot>
              <Text size="md" textColor="400" asChild decoration="semibold">
                <p>Endereço de e-mail</p>
              </Text>
              <TextInputRoot>
                <TextInputIcon>
                  <Envelope />
                </TextInputIcon>
                <TextInputInput
                  name="email"
                  type="email"
                  data-testid="common_register__input-email"
                  placeholder="Digite seu email"
                  value={ register.email }
                  onChange={ handleChange }
                />
              </TextInputRoot>
              <Text textColor="400" size="md" asChild decoration="semibold">
                <p>Sua senha</p>
              </Text>
              <TextInputRoot>
                <TextInputIcon>
                  <Lock />
                </TextInputIcon>
                <TextInputInput
                  name="password"
                  type="password"
                  data-testid="common_register__input-password"
                  placeholder="*********"
                  value={ register.password }
                  onChange={ handleChange }
                />
              </TextInputRoot>
            </div>
            <Button>
              <button
                type="submit"
                data-testid="common_register__button-register"
                preventdefault="true"
                disabled={ register.IsDisable }
              >
                Cadastre-se na plataforma
              </button>
            </Button>
            <div className="flex flex-col items-center">
              <Link to="/login">
                <Text textColor="400" size="xs" asChild decoration="underline">
                  <p>Já possui conta? Entrar</p>
                </Text>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
