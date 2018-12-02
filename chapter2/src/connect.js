import React, { useContext } from 'react';
import Context from './Context';

const connect = (mapState, mapDispatch) => {
  return WrappedComponent => {
    return () => {
      const { store, dispatch } = useContext(Context);
      return (
        <WrappedComponent {...mapState(store)} {...mapDispatch(dispatch)} />
      );
    };
  };
};

export default connect;
