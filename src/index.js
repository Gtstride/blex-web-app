import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap-css-only/css/bootstrap.min.css";
import './index.css';
import MainApp from './MainApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
