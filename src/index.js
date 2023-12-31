import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import './css/index.css';

import { BrowserRouter } from 'react-router-dom';
import App from 'App/App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter  basename = "/gastro-smart">
         <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


