import React, { createContext, useContext, useReducer } from 'react';

// 初始化状态
const initialState = {
  isAuthenticated: false,
  user: null,
  cart: [],
};

// 创建 Context
const AppContext = createContext(initialState);

// Reducer 函数来更新状态
const appReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
      return {
        ...state,
        cart: [...state.cart],
      };
    default:
      return state;
  }
};

// 创建一个 Provider 组件
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// 自定义 Hook，方便在组件中获取 Context 值
export const useAppContext = () => useContext(AppContext);