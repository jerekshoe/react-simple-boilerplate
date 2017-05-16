// Third Party imports
import React from 'react';
import { IndexRoute, Route } from 'react-router';

// Project imports
import App from './containers/App';
import { errorLoading, loadRoute } from './helpers';

if (typeof System === 'undefined') {
  var System = {
    import: (path) => (
      Promise.resolve(require(path))
    )
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
