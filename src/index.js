import React from 'react';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './Redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>,
);

reportWebVitals();
