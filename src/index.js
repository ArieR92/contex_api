import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {proveedorTema} from './contextos/contestoTeam';

//import HomePages from './Pages/HomePages';


ReactDOM.render(
  <React.StrictMode>
    <proveedorTema>
    <App />
    </proveedorTema>
  </React.StrictMode>,
  document.getElementById('root')
);

