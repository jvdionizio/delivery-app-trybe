import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const fetchProducts = async () => {
    const { data } = await axios.get('http://localhost:3001/products');
    console.log(data);

    setLoading(false);
    setProducts(data);
  };

  const verifyLogin = async () => {
    const { token } = JSON.parse(localStorage.getItem('user')) || '';

    await axios.get('http://localhost:3001/token', { token })
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
            id={ index }
          />
        ))
      }
    </div>
  );
}

export default CustomerProducts;
