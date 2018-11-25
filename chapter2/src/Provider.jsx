import React, { useState, useReducer, useEffect } from 'react';
import Context from './Context';

const Provider = ({ children, reducer }) => {
  const [store, dispatch] = useReducer(reducer);
  const [state, setState] = useState({ isLoaded: false });

  useEffect(() => {
    dispatch({ type: '@init' });
    setState({ isLoaded: true });
  }, []);

  return (
    <Context.Provider value={{ dispatch, store }}>
      {state.isLoaded ? children : false}
    </Context.Provider>
  );
};

export default Provider;
