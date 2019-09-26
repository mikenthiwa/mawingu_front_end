import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from '../views/home/home';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact path='/'
        component={Home}
      />
    </Switch>
  </BrowserRouter>
);

export default routes;
