import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Link to="/counter">counter</Link>
    <Link to="/todo-mvc">todomvc</Link>
  </div>
);

export default App;
