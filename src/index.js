import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import './css/index.css';

import { BrowserRouter } from 'react-router-dom';
import App from 'App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter  basename = "/gastro-smart">
         <App/>
        </BrowserRouter>
  </React.StrictMode>
);


