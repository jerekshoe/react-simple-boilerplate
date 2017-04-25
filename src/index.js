// Third Party imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, match } from 'react-router';

// Project imports
// import Client from './client';
import getRoutes from './routes';
import configureStore from './store';

const store = configureStore();
const routes = getRoutes(store);

if (module.hot) {
  module.hot.accept();
}

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>
  , document.getElementById('main'));
});
