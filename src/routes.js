// Third Party imports
import React from 'react';
import { Route } from 'react-router';

// Project imports
import App from './containers/App';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

if (typeof System === "undefined") {
  var System = {
    import: function(path) {
      return Promise.resolve(require(path));
    }
  };
}

const getRoutes = store => (
  <Route path="/" component={App} store={store}>
    <Route
      path="greeting"
      getComponents={(location, cb) => {
        System.import('./components/Greeting').then(loadRoute(cb)).catch(errorLoading);
      }}
    />
  </Route>
);

export default getRoutes;
