import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './components/redux/store';
import App from './App';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
     <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);