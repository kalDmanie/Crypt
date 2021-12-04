import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDom.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
