// Libary imports
import React from 'react';
import { IndexRoute, Route } from 'react-router';

// User imports
import App from './containers/App';
import Account from './containers/Account';
import AmountSelect from './containers/AmountSelect';
import HowItWorks from './components/HowItWorks';
import LastStep from './components/LastStep';
import Login from './containers/Login';
import Sorry from './containers/Sorry';
import Terms from './containers/Terms';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="account" component={Account} />
    <Route path="last-step" component={LastStep} />
    <Route path="terms" component={Terms} />
    <Route path="selection" component={AmountSelect} />
    <Route path="how-it-works" component={HowItWorks} />
    <Route path="sorry" component={Sorry} />
  </Route>
);

export default routes;
