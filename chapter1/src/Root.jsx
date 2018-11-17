import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Counter from './containers/Counter';
import TodoMVC from './containers/TodoMVC';
import App from './containers/App';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/counter" component={Counter} />
      <Route path="/todo-mvc" component={TodoMVC} />
    </div>
  </Router>
);

export default Root;
