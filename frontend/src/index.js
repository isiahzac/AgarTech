import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ShopContextProvider } from './Context/ShopContext'; Should be this


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

/* <ShopContextProvider>
<App />
</ShopContextProvider> We need the date to import our products and create our context*/ 
);


