import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {store, persistor} from './components/redux/store';
import App from './App';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
     <Router>
       <PersistGate persistor={persistor}>
        <App/>
       </PersistGate>      
    </Router>
  </Provider>,
  document.getElementById('root')
);