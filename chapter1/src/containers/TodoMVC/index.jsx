import React, { useState } from 'react';
import TodoMVC from './TodoMVC';
import mockData from './mockData';
import Context from './Context';
import hundlers from './hundlers';
import { persist, checkFilter } from './modules';

console.log('index')

const main = () => {
  const initialState = {
    data: !persist.read() ? mockData : persist.read(),
    current: checkFilter()
  };
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={{ ...state, ...hundlers(state, setState) }}>
      <TodoMVC />
    </Context.Provider>
  );
};

export default main;
