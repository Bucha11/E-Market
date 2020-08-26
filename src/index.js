import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

ReactDOM.render(<Provider store={store}>
  <React.StrictMode>
    <App state={store.getState()} 
dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode></Provider>,
  document.getElementById('root')
);


