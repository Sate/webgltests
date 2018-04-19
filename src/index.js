import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './router';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App'


ReactDOM.render((
  <BrowserRouter>
    {Routes()}
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
