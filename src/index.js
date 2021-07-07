import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {store,persistor} from './redux/store' ;
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    
    <React.StrictMode>
    <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      </React.StrictMode>
      
  </Provider>,
  document.getElementById('root')
);

