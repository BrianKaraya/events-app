import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import { AuthProvider } from '../src/components/auth';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './hooks/useAuth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
