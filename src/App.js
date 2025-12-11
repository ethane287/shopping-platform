import React from 'react';
import { AppProvider } from './contexts/AppContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import './components/Auth/Auth.css';

// 模拟商品数据
const mockProducts = [
  { id: 1, name: 'iPhone 13', price: 6999, description: '最新款苹果手机' },
  { id: 2, name: 'MacBook Pro', price: 12999, description: '专业级笔记本电脑' },
  { id: 3, name: 'AirPods Pro', price: 1999, description: '主动降噪无线耳机' },
  { id: 4, name: 'iPad Air', price: 4399, description: '轻薄便携平板电脑' },
];

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>简单购物平台</h1>
        <Login />
        <Register />
        <ProductList products={mockProducts} onAddToCart={() => {}} />
        <Cart />
      </div>
    </AppProvider>
  );
}

export default App;