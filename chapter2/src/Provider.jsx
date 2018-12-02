// @flow

import React, { useState, useReducer, useEffect } from 'react';
import Context from './Context';

type Props = {
  children: any,
  reducer: () => {}
};

const Provider = ({ children, reducer }: Props) => {
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
