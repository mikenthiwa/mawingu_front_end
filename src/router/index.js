import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import App from '../views/App';
import Task from '../views/TasksView';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact path='/'
        component={App}
      />
      <Route
        path='/tasks'
        component={Task}
      />
    </Switch>
  </BrowserRouter>
);

export default routes;
