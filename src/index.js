import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Header from './Components/Header';
import { Glasses } from './Components/Glasses';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Glasses/>
  </React.StrictMode>,
  document.getElementById('root')
);