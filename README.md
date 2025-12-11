# 简单购物平台

这是一个使用React构建的简单购物平台，包含以下功能：

## 功能特性

1. 用户登录/注册
2. 商品浏览
3. 商品管理（添加、删除、编辑）
4. 购物车功能
5. 订单管理

## 技术栈

- React
- React Hooks
- Context API（状态管理）
- localStorage（数据持久化）

## 项目结构

```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── Products/
│   │   ├── ProductList.jsx
│   │   ├── ProductForm.jsx
│   │   └── ProductItem.jsx
│   ├── Cart/
│   │   ├── Cart.jsx
│   │   └── CartItem.jsx
│   └── Layout/
│       ├── Header.jsx
│       └── Navigation.jsx
├── contexts/
│   └── AppContext.js
├── hooks/
│   └── useAuth.js
├── utils/
│   └── api.js
└── App.js
```

## 开发计划

1. 创建基础项目结构
2. 实现认证系统（登录/注册）
3. 实现商品管理功能
4. 实现购物车功能
5. 实现订单管理
6. 添加样式和优化用户体验

## 使用说明

```bash
# 克隆仓库
git clone <仓库地址>

# 安装依赖
npm install

# 启动开发服务器
npm start
```

## 贡献者

- ethane287 <ethan.cheng@imaginato.cn>