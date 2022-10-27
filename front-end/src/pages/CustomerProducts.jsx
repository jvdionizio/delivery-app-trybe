import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  const productsMock = [{
    id: '1',
    name: 'Bolo de Cenoura',
    price: 'R$ 29,90',
    image: 'https://cdn.awsli.com.br/600x450/21/21366/produto/30391153/5b8b9b6b5a.jpg',
  },
  {
    id: '2',
    name: 'Bolo de Chocolate',
    price: 'R$ 29,90',
    image: 'https://cdn.awsli.com.br/600x450/21/21366/produto/30391153/5b8b9b6b5a.jpg',
  },
  ];

  useEffect(() => {
    setProducts(productsMock);
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
            image={ product.image }
            id={ index }
          />
        ))
      }
    </div>
  );
}

export default CustomerProducts;
