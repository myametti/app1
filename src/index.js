import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//lo primero que hace react es ejecutar este archivo, busca el id root y lo renderiza
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> //es el archivoi app.js, que es el primer componente que levanta react
);

