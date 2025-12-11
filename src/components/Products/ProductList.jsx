import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const ProductList = ({ products }) => {
  const { dispatch } = useAppContext();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  return (
    <div className="product-list">
      <h2>商品列表</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">¥{product.price}</p>
            <p className="description">{product.description}</p>
            <button onClick={() => handleAddToCart(product)}>
              添加到购物车
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;