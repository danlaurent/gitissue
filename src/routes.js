import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Issues from './components/Issues';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/issues" component={Issues} />
  </Router>
);

export default Routes;