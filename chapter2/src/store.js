import { useContext } from 'react';
import Context from './Context';

const store = () => {
  const { store, dispatch } = useContext(Context);
  return {
    getState: store,
    dispatch
  };
};

export default store;
