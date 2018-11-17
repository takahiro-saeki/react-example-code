import React, { useState } from 'react';
import TodoMVC from './index';
import mockData from './mockData';

const Context = React.createContext();

const Store = () => {
  const initialState = {
    data: mockData,
    current: 'all'
  };
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={state}>
      <TodoMVC />
    </Context.Provider>
  );
};

export default Store;
