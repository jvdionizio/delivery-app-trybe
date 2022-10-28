import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:3001/products');

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
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
