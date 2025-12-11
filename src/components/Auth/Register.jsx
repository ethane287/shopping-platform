import React, { useState } from 'react';
import './Auth.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    // 表单验证函数
    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!username) {
            errors.username = '用户名不能为空';
            isValid = false;
        }

        if (!email) {
            errors.email = '邮箱不能为空';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = '邮箱地址不正确';
            isValid = false;
        }

        if (!password) {
            errors.password = '密码不能为空';
            isValid = false;
        }

        if (!confirmPassword) {
            errors.confirmPassword = '确认密码不能为空';
            isValid = false;
        } else if (password !== confirmPassword) {
            errors.confirmPassword = '密码和确认密码不匹配';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    // 注册按钮点击事件处理函数
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('表单提交的数据:', { username, email, password, confirmPassword });
            // 这里可以添加发送请求到后端的代码
        }
    };

    return (
        <div className="auth-container">
            <h2>注册</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>用户名:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <div className="error">{errors.username}</div>}
                </div>
                <div className="form-group">
                    <label>邮箱:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label>密码:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <div className="form-group">
                    <label>确认密码:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                </div>
                <button type="submit">注册</button>
            </form>
        </div>
    );
};

export default Register;