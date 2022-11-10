import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CheckoutAddress from '../components/CheckoutAddress';
import CheckoutProducts from '../components/CheckoutProducts';
import Header from '../components/Header';
import Text from '../components/styles/Text';

function Checkout() {
  const [user, setUser] = useState({});

  const verifyLogin = async () => {
    // const data = JSON.parse(localStorage.getItem('user')) || ''; // mock
    // fetchProducts();
    // setUser(data);
    const { token } = JSON.parse(localStorage.getItem('user')) || '';

    await axios.post('http://localhost:3001/token', { token })
      .then((response) => {
        setUser(response.data.data);
      });
  };

  useEffect(() => {
    verifyLogin();
  }, []);

  return (
    <div className="bg-white-smoked w-screen h-screen mt-28 mb-5">
      <Header user={ user.name } />
      <div className="w-full h-full flex flex-col items-center gap-6">
        <div className="2xl:w-7/12 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6">
          <Text size="lg" asChild>
            <p>Finalizar Pedido</p>
          </Text>
          <CheckoutProducts />
        </div>
        <div className="2xl:w-7/12 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6">
          <Text size="lg" asChild>
            <p>Detalhes e Endereço Para Entrega</p>
          </Text>
          <CheckoutAddress />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
