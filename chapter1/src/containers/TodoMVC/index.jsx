import React, { useState } from 'react';
import TodoMVC from './TodoMVC';
import mockData from './mockData';
import Context from './Context';
import hundlers from './hundlers';

const Store = () => {
  const initialState = {
    data: mockData
  };
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={{ ...state, ...hundlers(state, setState) }}>
      <TodoMVC />
    </Context.Provider>
  );
};

export default Store;
