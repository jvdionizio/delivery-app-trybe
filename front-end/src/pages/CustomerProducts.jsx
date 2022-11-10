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
        setUser(response.data.data);
      })
      .catch(() => navigate('/login'));
  };

  useEffect(() => {
    verifyLogin();
  }, []);

  return (
    <div className="bg-white-smoked w-screen mt-28 mb-5">
      {loading && <p>Loading...</p>}
      <Header user={ user.name } />
      <div className="w-full flex flex-col items-center justify-center">
        <div
          className="
            w-11/12
            flex
            flex-wrap
            gap-7
            items-center
            justify-center
            2xl:justify-between
          "
        >
          {
            products.map((product, index) => (
              <ProductCard
                key={ product.id }
                name={ product.name }
                price={ product.price }
                image={ product.urlImage }
                id={ product.id }
                dataTestId={ index + 1 }
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default CustomerProducts;
