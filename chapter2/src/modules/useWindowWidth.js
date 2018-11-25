import { useState, useEffect } from 'react';

const isClient = typeof window === 'object';

const useWindowWidth = initialWidth => {
  const [state, setState] = useState({
    width: isClient ? window.innerWidth : initialWidth
  });

  useEffect(
    () => {
      const handler = () => {
        setState({
          width: window.innerWidth
        });
      };
      window.addEventListener('resize', handler);
      return () => window.removeEventListener('resize', handler);
    },
    [1]
  );

  return state.width;
};

export default useWindowWidth;
