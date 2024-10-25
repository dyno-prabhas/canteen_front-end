import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CanteenContextProvider } from './context/CanteenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <CanteenContextProvider>
        <App />
      </CanteenContextProvider>
    </BrowserRouter>
  </>
);
