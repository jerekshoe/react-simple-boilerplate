// Third Party imports
import React from 'react';
import { Route } from 'react-router';

// Project imports
import App from './containers/App';

const greeting = () => {
  return (
    <div>Hello There</div>
  );
};

const routes = (
  <Route path="/" component={App}>
    <Route path="greeting" component={greeting} />
  </Route>
);

export default routes;
