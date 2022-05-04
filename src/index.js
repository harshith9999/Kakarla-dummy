import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './App';

axios.interceptors.request.use(function (config) {
const token = JSON.parse(localStorage.getItem('login'))?.token;
if(token){
    config.headers.Authorization = token;
  }
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

