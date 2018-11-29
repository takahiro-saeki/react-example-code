import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './App';
import ClassComponent from './ClassComponent';
import SFC from './SFC';
import RenderProps from './RenderProps';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/class-component" component={ClassComponent} />
      <Route exact path="/sfc" component={SFC} />
      <Route exact path="/render-props" component={RenderProps} />
    </Switch>
  </Router>
);

export default Root;
