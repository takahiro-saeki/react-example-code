import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Counter from './containers/Counter';
import TodoMVC from './containers/TodoMVC';
import App from './containers/App';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/counter" component={Counter} />
      <Route path="/todo-mvc" component={TodoMVC} />
    </Switch>
  </Router>
);

export default Root;
