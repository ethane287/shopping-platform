import React, { useState } from 'react';
import './Auth.css';

const Login = () => {
  // 设置状态来存储用户名和密码
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 表单提交处理函数
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 简单的前端验证
    if (username.trim() === '' || password.trim() === '') {
      setError('用户名和密码不能为空');
      return;
    }

    if (password.length < 6) {
      setError('密码长度至少为6个字符');
      return;
    }

    // 这里可以添加实际登录逻辑，例如调用API
    console.log('登录成功，用户名：', username);
    setError('');
  };

  return (
    <div className="auth-container">
      <h2>登录</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">用户名：</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码：</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default Login;