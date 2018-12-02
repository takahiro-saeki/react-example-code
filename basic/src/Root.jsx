import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import ClassComponent from './ClassComponent';
import SFC from './SFC';
import RenderProps from './RenderProps';
import Decorator from './Decorator';
import HOC from './HOC';
import HOC2 from './HOC2';
import CompoundComponents from './CompoundComponents';
import CompoundComponents2 from './CompoundComponents2';
import HooksExample from './HooksExample';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/class-component" component={ClassComponent} />
      <Route exact path="/sfc" component={SFC} />
      <Route exact path="/render-props" component={RenderProps} />
      <Route exact path="/decorator" component={Decorator} />
      <Route exact path="/hoc" component={HOC} />
      <Route exact path="/hoc2" component={HOC2} />
      <Route exact path="/compound-components" component={CompoundComponents} />
      <Route
        exact
        path="/compound-components2"
        component={CompoundComponents2}
      />
      <Route exact path="/hooks-example" component={HooksExample} />
    </Switch>
  </Router>
);

export default Root;
