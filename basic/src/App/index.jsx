import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h2>サンプルのリンク</h2>
    <ul>
      <li>
        <Link to="/class-component">class component</Link>
      </li>
      <li>
        <Link to="/sfc">sfc</Link>
      </li>
      <li>
        <Link to="/render-props">render props</Link>
      </li>
      <li>
        <Link to="/decorator">decorator</Link>
      </li>
      <li>
        <Link to="/hoc">HOC</Link>
      </li>
      <li>
        <Link to="/hoc2">HOC2</Link>
      </li>
      <li>
        <Link to="/compound-components">compound components</Link>
      </li>
      <li>
        <Link to="/compound-components2">compound components2</Link>
      </li>
      <li>
        <Link to="/hooks-example">hooks example</Link>
      </li>
    </ul>
  </div>
);
export default App;
