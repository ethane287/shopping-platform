import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const Cart = () => {
  const { state, dispatch } = useAppContext();

  const handleIncreaseQuantity = (itemId) => {
    // 增加商品数量的逻辑
    console.log('增加商品数量:', itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    // 减少商品数量的逻辑
    console.log('减少商品数量:', itemId);
  };

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart">
      <h2>购物车</h2>
      {state.cart.length === 0 ? (
        <p>购物车为空</p>
      ) : (
        <>
          {state.cart.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>价格: ¥{item.price}</p>
              <p>数量: {item.quantity}</p>
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              <button onClick={() => handleRemoveItem(item.id)}>移除</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>总计: ¥{calculateTotal()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;