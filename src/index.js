import React from 'react';
import { ConfigProvider } from 'react-avatar';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthProvider } from './context/AuthProvider';
import { AvatarProvider } from './context/AvatarProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AvatarProvider>
        <ConfigProvider colors={['red', 'green', 'blue']}>
          <App />
        </ConfigProvider>
      </AvatarProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
