import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';

function CustomerProducts() {
  const { totalPrice } = useContext(Context);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const fetchProducts = async () => {
    const { data } = await axios.get('http://localhost:3001/products');

    setLoading(false);
    setProducts(data);
  };

  const verifyLogin = async () => {
    // const data = JSON.parse(localStorage.getItem('user')) || ''; // mock
    // fetchProducts();
    // setUser(data);
    const { token } = JSON.parse(localStorage.getItem('user')) || '';

    await axios.post('http://localhost:3001/token', { token })
      .then((response) => {
        fetchProducts();
        setUser(response.data);
      })
      .catch(() => navigate('/login'));
  };

  useEffect(() => {
    verifyLogin();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <Header user={ user.name } />
      {
        products.map((product, index) => (
          <ProductCard
            key={ product.id }
            name={ product.name }
            price={ product.price }
            image={ product.urlImage }
            id={ product.id }
            dataTestId={ index }
          />
        ))
      }
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => navigate('/customer/checkout') }
      >
        {`Ver carrinho: R$ ${totalPrice}`}
      </button>
    </div>
  );
}

export default CustomerProducts;
